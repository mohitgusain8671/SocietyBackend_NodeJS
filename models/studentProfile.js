/**
 * @swagger
 * components:
 *   schemas:
 *     StudentProfile:
 *       type: object
 *       required:
 *         - EnrollmentNo
 *         - UserID
 *         - FirstName
 *         - LastName
 *         - Branch
 *         - BatchYear
 *         - MobileNo
 *         - ProfilePicture
 *         - SocietyName
 *         - SocietyPosition
 *         - StudentContributions
 *       properties:
 *         EnrollmentNo:
 *           type: integer  
 *           description: The Enrollment No. of the student assigned by the college
 *         UserID:
 *           type: integer
 *           description: The UserID of the student
 *         FirstName:
 *           type: string
 *           description: The First name of the student
 *         LastName:
 *           type: string
 *           description: The First name of the student
 *         Branch:
 *           type: string
 *           description: The branch of the student
 *         BatchYear:
 *           type: integer
 *           description: The batch year of the student
 *         MobileNo:
 *           type: string
 *           description: The mobile no. of the student
 *         ProfilePicture:
 *           type: string
 *           description: student's profile image
 *         SocietyName:
 *           type: string
 *           description: The name of the society in which the student is enrolled
 *         SocietyPosition:
 *           type: string
 *           description: The student's position in the assigned society
 *         StudentContributions:
 *           type: string
 *           description: The Contributions made by the society members
 */


module.exports = (sequelize, DataTypes) => {

    const StudentProfile = sequelize.define("StudentProfile", {
      EnrollmentNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true, // If you want auto-increment
      },
      UserID: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Branch: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      BatchYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      MobileNo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ProfilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      SocietyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SocietyPosition: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      StudentContributions: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "studentprofiles", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    });

    StudentProfile.associate = (models) => {

      StudentProfile.belongsTo(models.StudentMarkings, {
        foreignKey: 'EnrollmentNo',
        as: 'studentmarkings',
      });
      
      StudentProfile.belongsTo(models.User, {
        foreignKey: 'UserID',
        as: 'users',
      });

      StudentProfile.hasMany(models.StudentAchievement, {
        foreignKey: 'EnrollmentNo',
        as: 'studentachievements',
      });

      StudentProfile.belongsTo(models.SocietyProfile, {
        foreignKey: 'SocietyName',
        as: 'societyprofiles',
      });

      StudentProfile.hasMany(models.Testimonials, {
        foreignKey: 'EnrollmentNo',
        as: 'testimonials',
      });
    
    };
  
    return StudentProfile
  }
/**
 * @swagger
 * components:
 *   schemas:
 *     StudentMarking:
 *       type: object
 *       required:
 *         - EnrollmentNo
 *         - StudentGrades
 *       properties:
 *         EnrollmentNo:
 *           type: integer  
 *           description: The enrollment no. of the student
 *         StudentGrades:
 *           type: string
 *           description: The grade assigned to the student by the society
 */

module.exports = (sequelize, DataTypes) => {

    const StudentMarkings = sequelize.define("StudentMarkings", {
      EnrollmentNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, // If you want auto-increment
      },
      StudentGrades: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "studentmarkings", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    });

    StudentMarkings.associate = (models) => {
      
        StudentMarkings.hasMany(models.StudentProfile, {
          foreignKey: 'EnrollmentNo',
          as: 'studentprofiles',
        });
    };
  
    return StudentMarkings
  }
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
        type: DataTypes.BLOB,
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
    },
    {
      tableName: "studentprofiles", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    })
  
    return StudentProfile
  }
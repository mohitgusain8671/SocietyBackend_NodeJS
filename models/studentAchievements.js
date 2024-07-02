const { DATE } = require("sequelize")

module.exports = (sequelize, DataTypes) => {

    const StudentAchievement = sequelize.define("StudentAchievement", {
      EnrollmentNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      AchievementID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      DateAchieved: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "studentachievements", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    })
  
    return StudentAchievement
  }
/**
 * @swagger
 * components:
 *   schemas:
 *     StudentAchievements:
 *       type: object
 *       required:
 *         - EnrollmentNo
 *         - AchievementID
 *         - Title
 *         - Description
 *         - DateAchieved
 *       properties:
 *         EnrollmentNo:
 *           type: integer  
 *           description: The Enrollment No. of the student assigned by the college
 *         AchievementID:
 *           type: integer
 *           description: The Achievement id of the student
 *         Title:
 *           type: string
 *           description: A short title for the achievement
 *         Description:
 *           type: string
 *           description: A brief description of te achievement
 *         DateAchieved:
 *           type: string
 *           format: date-time
 *           description: The achievement date
 */


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
/**
 * @swagger
 * components:
 *   schemas:
 *     SocietyAchievements:
 *       type: object
 *       required:
 *         - SocietyID
 *         - SocietyAchievementID
 *         - Title
 *         - Description
 *         - DateAchieved
 *       properties:
 *         SocietyID:
 *           type: integer  
 *           description: The ID of the society
 *         SocietyAchievementID:
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

    const SocietyAchievement = sequelize.define("SocietyAchievement", {
      SocietyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      SocietyAchievementID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // primaryKey: true,
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
      tableName: "societyachievements", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    });


    SocietyAchievement.associate = (models) => {
      
      SocietyAchievement.belongsTo(models.SocietyProfile, {
        foreignKey: 'SocietyID',
        as: 'societyprofiles',
      });

    };
  
    return SocietyAchievement
  }
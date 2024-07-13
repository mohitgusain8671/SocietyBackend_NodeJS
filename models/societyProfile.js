/**
 * @swagger
 * components:
 *   schemas:
 *     SocietyProfile:
 *       type: object
 *       required:
 *         - SocietyID
 *         - SocietyType
 *         - SocietyName
 *         - SocietyHead
 *         - SocietyCoordinator
 *         - DateOfRegistration
 *         - SocietyDescription
 *       properties:
 *         SocietyID:
 *           type: integer  
 *           description: The id of the society
 *         SocietyType:
 *           type: string
 *           description: The type of the society
 *         SocietyName:
 *           type: string
 *           description: The name of the society
 *         SocietyHead:
 *           type: string
 *           description: The society head
 *         SocietyCoordinator:
 *           type: string
 *           description: The society coordinator
 *         DateOfRegistration:
 *           type: string
 *           format: date-time
 *           description: The date when the society registered
 *         SocietyDescription:
 *           type: string
 *           description: The description of the society
 */

const { DATE } = require("sequelize")
module.exports = (sequelize, DataTypes) => {

    const SocietyProfile = sequelize.define("SocietyProfile", {
      SocietyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      SocietyType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SocietyName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SocietyHead: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      SocietyCoordinator: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      DateOfRegistration: {
        type: DataTypes.DATE,
        allowNull: false
      },
      SocietyDescription: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "societyprofiles", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    //   freezeTableName: true to disable the pluralization of the table name
    });


    SocietyProfile.associate = (models) => {
      
      SocietyProfile.hasMany(models.SocietyEvents, {
        foreignKey: 'SocietyID',
        as: 'societyevents',
        onDelete: 'CASCADE'
      });

      SocietyProfile.hasMany(models.SocietyAchievement, {
        foreignKey: 'SocietyID',
        as: 'societyachievements',
        onDelete: 'CASCADE'
      });
      
      SocietyProfile.hasMany(models.StudentProfile, {
        foreignKey: 'SocietyName',
        as: 'studentprofiles',
        onDelete: 'CASCADE'
      });

    };
  
    return SocietyProfile
  }
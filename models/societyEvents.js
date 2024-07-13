/**
 * @swagger
 * components:
 *   schemas:
 *     SocietyEvents:
 *       type: object
 *       required:
 *         - SocietyID
 *         - EventID
 *         - Title
 *         - Description
 *         - EventType
 *         - ModeOfEvent
 *         - Location
 *         - EventDateTime
 *       properties:
 *         SocietyID:
 *           type: integer  
 *           description: The ID of the society
 *         EventID:
 *           type: integer
 *           description: The name of the event conducted by the society
 *         Title:
 *           type: string
 *           description: The title of the event
 *         Description:
 *           type: string
 *           description: The description of the event
 *         EventType:
 *           type: string
 *           description: The type of the event
 *         ModeOfEvent:
 *           type: string
 *           description: The mode of the event
 *         Location:
 *           type: string
 *           description: The location where the event occurs
 *         EventDateTime:
 *           type: string
 *           format: date-time
 *           description: The date and timings of the event
 */

module.exports = (sequelize, DataTypes) => {

    const SocietyEvents = sequelize.define("SocietyEvents", {
      SocietyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'societyprofiles',
          key: 'SocietyID'
        },
        onDelete: 'CASCADE'
      },
      EventID: {
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
      EventType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ModeOfEvent: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      EventDateTime: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "societyevents", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    });


    SocietyEvents.associate = (models) => {
      
      SocietyEvents.belongsTo(models.SocietyProfile, {
        foreignKey: 'SocietyID',
        as: 'societyprofiles',
      });
    };
  
    return SocietyEvents
  }
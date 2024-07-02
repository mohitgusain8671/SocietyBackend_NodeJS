module.exports = (sequelize, DataTypes) => {

    const SocietyEvents = sequelize.define("SocietyEvents", {
      SocietyID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, // If you want auto-increment
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
    })
  
    return SocietyEvents
  }
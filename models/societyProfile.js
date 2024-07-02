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
    },
    {
      tableName: "societyprofiles", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    //   freezeTableName: true to disable the pluralization of the table name
    })
  
    return SocietyProfile
  }
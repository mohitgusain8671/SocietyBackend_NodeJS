module.exports = (sequelize, DataTypes) => {

    const Roles = sequelize.define("Roles", {
      RoleID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true, // If you want auto-increment
      },
      Rolename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "roles", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    })
  
    return Roles
  }
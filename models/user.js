module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define("User", {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true, // If you want auto-increment
    },
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    RoleID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "users", // Explicit table name
    timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
    id: false,    // Disable default primary key
  })

  return User
}
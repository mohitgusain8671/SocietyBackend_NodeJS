/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       required:
 *         - UserID
 *         - Username
 *         - Password
 *         - Email
 *         - RoleID
 *       properties:
 *         UserID:
 *           type: integer  
 *           description: The ID of the user
 *         Username:
 *           type: string
 *           description: The name of the user
 *         Password:
 *           type: string
 *           description: The password set by the user
 *         Email:
 *           type: string
 *           description: The email-id of the user
 *         RoleID:
 *           type: integer
 *           description: The society role of the user
 */

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
  });


  User.associate = (models) => {
    
    User.hasOne(models.StudentProfile, {
      foreignKey: 'UserID',
      as: 'studentprofiles',
      onDelete: 'CASCADE',
    });

    User.hasMany(models.Roles, {
      foreignKey: 'RoleID',
      as: 'roles',
    });

  };

  return User
}
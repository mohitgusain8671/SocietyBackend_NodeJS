/**
 * @swagger
 * components:
 *   schemas:
 *     Roles:
 *       type: object
 *       required:
 *         - RoleID
 *         - Rolename
 *       properties:
 *         RoleID:
 *           type: integer  
 *           description: The ID of the role assigned to the student
 *         Rolename:
 *           type: string
 *           description: The name of the role assigned to the student
 */


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
    });

    Roles.associate = (models) => {
      
      Roles.belongsTo(models.User, {
        foreignKey: 'RoleID',
        as: 'users',
      });
  };
  
    return Roles
  }
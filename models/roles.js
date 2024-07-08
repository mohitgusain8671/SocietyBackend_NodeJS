/**
 * @swagger
 * components:
 *   schemas:
 *     Roles:
 *       type: object
 *       required:
 *         - RoleID
 *         - Rolename
 *         - LastDateToApply
 *         - Responsibilities
 *         - LinkBySociety
 *       properties:
 *         RoleID:
 *           type: integer  
 *           description: The ID of the role assigned to the student
 *         Rolename:
 *           type: string
 *           description: The name of the role assigned to the student
 *         LastDateToApply:
 *           type: string
 *           description: The last date to apply for the role
 *         Responsibilities:
 *           type: string
 *           description: The responsibilities of the assigned role
 *         LinkBySociety:
 *           type: string
 *           description: The link provided by the society to apply for the role
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
      LastDateToApply: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Responsibilities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      LinkBySociety: {
        type: DataTypes.STRING,
        allowNull: false,
      }
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

  //lastdate responsibilities link
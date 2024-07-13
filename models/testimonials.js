/**
 * @swagger
 * components:
 *   schemas:
 *     Testimonials:
 *       type: object
 *       required:
 *         - EnrollmentNo
 *         - TestimonialDescription
 *       properties:
 *         EnrollmentNo:
 *           type: integer  
 *           description: The Enrollment No. of the student assigned by the college
 *         TestimonialDescription:
 *           type: string
 *           description: The testimonial description
 */


module.exports = (sequelize, DataTypes) => {

    const Testimonials = sequelize.define("Testimonials", {
      EnrollmentNo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'studentprofiles',
          key: 'EnrollmentNo'
        },
        onDelete: 'CASCADE',
        primaryKey: true,
        // autoIncrement: true, // If you want auto-increment
      },
      TestimonialDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
    },
    {
      tableName: "testimonials", // Explicit table name
      timestamps: false, // Disable timestamps if you don't want `createdAt` and `updatedAt`
      id: false,    // Disable default primary key
    });

    Testimonials.associate = (models) => {

      Testimonials.belongsTo(models.StudentProfile, {
        foreignKey: 'EnrollmentNo',
        as: 'testimonials',
      });
      
    };
  
    return Testimonials
  }
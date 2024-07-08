const { where } = require("sequelize");
let db = require("../models");

const testimonials = db.Testimonials;

//ADD NEW STUDENT
let AddNewTestimonial = async (
    EnrollmentNo,
    TestimonialDescription,
) => {
  try {
    let data = await testimonials.create({
        EnrollmentNo,
        TestimonialDescription,
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE STUDENT
let UpdateTestimonial = async (
    EnrollmentNo,
    TestimonialDescription,
) => {
  try {
    let data = await testimonials.update(
      { 
        EnrollmentNo,
        TestimonialDescription,
      },
      {
        where: {
          EnrollmentNo: EnrollmentNo,
        },
      }
    );
    return data;
  } catch (e) {
    return e;
  }
};


//GET ALL THE STUDENTS
let FetchAllTestimonials = async () => {
  try {
    let data = await testimonials.findAll({
      order: [
        ["EnrollmentNo", "ASC"], 
      ],
      attributes: ['FirstName','LastName','Branch','ProfilePicture']
    });

    return data;
  } catch (e) {
    return;
  }
};

//GET STUDENT BY ID
let FetchTestimonialID = async (EnrollmentNo) => {
  if (!EnrollmentNo) {
    throw new Error("EnrollmentNo is required");
  }
  try {
    let student = await testimonials.findOne({
      where: { EnrollmentNo},
      attributes: ['FirstName','LastName','Branch','ProfilePicture']
    });
    console.log(student);
    return student;
  } catch (e) {
    return e;
  }
};


//delete STUDENT
let RemoveTestimonial = async (EnrollmentNo) => {
  try {

    if (!EnrollmentNo) {
      throw new Error("EnrollmentNo is required");
    }

    let result = await testimonials.destroy({
      where: {
        EnrollmentNo: EnrollmentNo,
      },
    });

    // Check if the item was deleted
    if (result === 0) {
      throw new Error(`Testimonial with student EnrollmentNo ${EnrollmentNo} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Testimonial with student EnrollmentNo ${EnrollmentNo} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing Testimonial with student EnrollmentNo ${EnrollmentNo}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewTestimonial,
  UpdateTestimonial,
  RemoveTestimonial,
  FetchAllTestimonials,
  FetchTestimonialID,
};
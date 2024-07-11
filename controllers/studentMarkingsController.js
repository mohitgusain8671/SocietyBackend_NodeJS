const { where } = require("sequelize");
let db = require("../models");

const studentMarking = db.StudentMarking;

//ADD NEW STUDENT MARKING
let AddNewMarking = async (
    EnrollmentNo,
    StudentGrades,
) => {
  try {
    let data = await studentMarking.create({
        EnrollmentNo,
        StudentGrades,
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE student marking
let UpdateMarking = async (
    EnrollmentNo,
    StudentGrades,
) => {
  try {
    let [data] = await studentMarking.update(
      {
        StudentGrades,
      },
      {
        where: {
            EnrollmentNo
        },
      }
    );
    
    // Check if any rows were updated
    if (data) {
      // Fetch and return the updated testimonial
      const updated = await studentMarking.findOne({ where: { EnrollmentNo } });
      return updated;
    }

    // If no rows were updated, throw an error
    throw new Error('Student not found');
  } catch (e) {
    return e;
  }
};


//GET ALL THE STUDENT MARKING RECORD
let FetchAllMarkings = async () => {
  try {
    let data = await studentMarking.findAll({
      order: [
        ["EnrollmentNo", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};



//delete an assigned marking of a student
let RemoveMarking = async (EnrollmentNo) => {
  try {
    if (!EnrollmentNo) {
      throw new Error("EnrollmentNo is required");
    }

    // Attempt to delete the item
    let result = await studentMarking.destroy({
      where: {
        EnrollmentNo: EnrollmentNo,
      },
    });

    if (result === 0) {
      throw new Error(`Student with EnrollmentNo ${EnrollmentNo} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Student's marking with EnrollmentNo ${EnrollmentNo} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing student with EnrollmentNo ${EnrollmentNo}:`, e.message);
    return {
      error: e.message,
    };
  }
};


module.exports = {
  AddNewMarking,
  UpdateMarking,
  RemoveMarking,
  FetchAllMarkings,
};
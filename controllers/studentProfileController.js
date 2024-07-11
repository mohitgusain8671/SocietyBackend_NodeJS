const { where } = require("sequelize");
let db = require("../models");

const studentProfile = db.StudentProfile;

//ADD NEW STUDENT
let AddNewStudent = async (
    EnrollmentNo,
    UserID,
    FirstName,
    LastName,
    Branch,
    BatchYear,
    MobileNo,
    ProfilePicture,
    SocietyName,
    SocietyPosition,
    StudentContributions
) => {
  try {
    let data = await studentProfile.create({
        EnrollmentNo,
        UserID,
        FirstName,
        LastName,
        Branch,
        BatchYear,
        MobileNo,
        ProfilePicture,
        SocietyName,
        SocietyPosition,
        StudentContributions
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE STUDENT
let UpdateStudent = async (
    EnrollmentNo,
    UserID,
    FirstName,
    LastName,
    Branch,
    BatchYear,
    MobileNo,
    ProfilePicture,
    SocietyName,
    SocietyPosition,
    StudentContributions
) => {
  try {
    let data = await studentProfile.update(
      { 
        EnrollmentNo,
        UserID,
        FirstName,
        LastName,
        Branch,
        BatchYear,
        MobileNo,
        ProfilePicture,
        SocietyName,
        SocietyPosition,
        StudentContributions
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
let FetchAllStudents = async () => {
  try {
    let data = await studentProfile.findAll({
      order: [
        ["UserID", "ASC"], 
      ],
      include: [{
        model: StudentAchievement,
        as: 'studentachievements'
      }]
    });

    return data;
  } catch (e) {
    return;
  }
};

//GET STUDENT BY ID
let FetchStudent = async (EnrollmentNo) => {
  if (!EnrollmentNo) {
    throw new Error("EnrollmentNo is required");
  }
  try {
    let student = await studentProfile.findOne({
      where: {
        EnrollmentNo,
      },
    });
    console.log(student);
    return student;
  } catch (e) {
    return e;
  }
};



//GET STUDENT CONTRIBUTIONS
let FetchContributions = async (EnrollmentNo) => {
  if (!EnrollmentNo) {
    throw new Error("EnrollmentNo is required");
  }
  try {
    let contri = await studentProfile.findOne({
      where: {
        EnrollmentNo,
      },
      attributes: ['StudentContributions'],
    });
    console.log(contri);
    return contri;
  } catch (e) {
    return e;
  }
};


//delete STUDENT
let RemoveStudent = async (EnrollmentNo) => {
  try {
    // Check if FoodId is provided
    if (!EnrollmentNo) {
      throw new Error("EnrollmentNo is required");
    }

    // Attempt to delete the food item
    let result = await societyProfile.destroy({
      where: {
        EnrollmentNo: EnrollmentNo,
      },
    });

    // Check if the food item was deleted
    if (result === 0) {
      throw new Error(`Student with EnrollmentNo ${EnrollmentNo} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Student with EnrollmentNo ${EnrollmentNo} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing Student with EnrollmentNo ${EnrollmentNo}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewStudent,
  UpdateStudent,
  RemoveStudent,
  FetchAllStudents,
  FetchStudent,
  FetchContributions,
};
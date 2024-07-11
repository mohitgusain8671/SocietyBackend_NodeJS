const { where } = require("sequelize");
let db = require("../models");

const studentAchievements = db.StudentAchievements;

//ADD NEW ACHIEVEMENT
let AddNewAchievement = async (
    EnrollmentNo,
    AchievementID,
    Title,
    Description,
    DateAchieved
) => {
  try {
    let data = await studentAchievements.create({
        EnrollmentNo,
        AchievementID,
        Title,
        Description,
        DateAchieved
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE ACHIEVEMENT
let UpdateAchievement = async (
    EnrollmentNo,
    AchievementID,
    Title,
    Description,
    DateAchieved
) => {
  try {
    let [data] = await studentAchievements.update(
      {
        AchievementID,
        Title,
        Description,
        DateAchieved
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
      const updated = await studentAchievements.findOne({ where: { EnrollmentNo } });
      return updated;
    }

    // If no rows were updated, throw an error
    throw new Error('Student Achievement not found');
    
  } catch (e) {
    return e;
  }
};


//GET ALL THE ACHIEVEMENTS
let FetchAllAchievement = async () => {
  try {
    let data = await studentAchievements.findAll({
      order: [
        ["AchievementID", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};



//GET STUDENT ACHIEVEMENTS
let FetchAchievements = async (EnrollmentNo) => {
  if (!EnrollmentNo) {
    throw new Error("EnrollmentNo is required");
  }
  try {
    let achievement = await studentAchievements.findOne({
      where: {
        EnrollmentNo,
      },
      attributes: ['Description'],
    });
    console.log(achievement);
    return achievement;
  } catch (e) {
    return e;
  }
};



//delete an achievement of a student
let RemoveAchievement = async (EnrollmentNo) => {
  try {
    if (!EnrollmentNo) {
      throw new Error("EnrollmentNo is required");
    }

    // Attempt to delete the item
    let result = await studentAchievements.destroy({
      where: {
        EnrollmentNo: EnrollmentNo,
      },
    });

    if (result === 0) {
      throw new Error(`Student's achievement with EnrollmentNo ${EnrollmentNo} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Student's achievement with EnrollmentNo ${EnrollmentNo} successfully deleted`,
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
  AddNewAchievement,
  UpdateAchievement,
  RemoveAchievement,
  FetchAllAchievement,
  FetchAchievements,
};
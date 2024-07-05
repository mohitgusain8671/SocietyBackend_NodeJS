const { where } = require("sequelize");
let db = require("../models");

const societyAchievements = db.SocietyAchievements;

//ADD NEW ACHIEVEMENT
let AddNewAchievementSociety = async (
    SocietyID,
    SocietyAchievementID,
    Title,
    Description,
    DateAchieved
) => {
  try {
    let data = await societyAchievements.create({
        SocietyID,
        SocietyAchievementID,
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
let UpdateAchievementSociety = async (
    SocietyID,
    SocietyAchievementID,
    Title,
    Description,
    DateAchieved
) => {
  try {
    let data = await societyAchievements.update(
      {
        SocietyID,
        SocietyAchievementID,
        Title,
        Description,
        DateAchieved
      },
      {
        where: {
            SocietyID: SocietyID,
        },
      }
    );
    return data;
  } catch (e) {
    return e;
  }
};


//GET ALL THE ACHIEVEMENTS
let FetchAllAchievementSociety = async () => {
  try {
    let data = await societyAchievements.findAll({
      order: [
        ["SocietyAchievementID", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};



//delete an achievement of a society
let RemoveAchievementSociety = async (SocietyID) => {
  try {
    if (!SocietyID) {
      throw new Error("SocietyID is required");
    }

    // Attempt to delete the item
    let result = await societyAchievements.destroy({
      where: {
        SocietyID: SocietyID,
      },
    });

    if (result === 0) {
      throw new Error(`Society's achievement with SocietyID ${SocietyID} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Society's achievement with SocietyID ${SocietyID} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing society with SocietyID ${SocietyID}:`, e.message);
    return {
      error: e.message,
    };
  }
};


module.exports = {
  AddNewAchievementSociety,
  UpdateAchievementSociety,
  RemoveAchievementSociety,
  FetchAllAchievementSociety,
};
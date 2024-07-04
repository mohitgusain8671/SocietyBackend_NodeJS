const { where } = require("sequelize");
let db = require("../models");

const societyProfile = db.SocietyProfile;

//ADD NEW SOCIETY
let AddNewSociety = async (
    SocietyID,
    SocietyType,
    SocietyName,
    SocietyHead,
    SocietyCoordinator,
    DateOfRegistration,
    SocietyDescription,
) => {
  try {
    let data = await societyProfile.create({
        SocietyID,
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE SOCIETY
let UpdateSociety = async (
    SocietyID,
    SocietyType,
    SocietyName,
    SocietyHead,
    SocietyCoordinator,
    DateOfRegistration,
    SocietyDescription,
) => {
  try {
    let data = await societyProfile.update(
      {
        SocietyID,
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
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


//GET ALL THE SOCIETIES
let FetchAllSociety = async () => {
  try {
    let data = await societyProfile.findAll({
      order: [
        ["SocietyID", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};

//GET SOCIETY BY ID
let FetchSociety = async (SocietyID) => {
  if (!SocietyID) {
    throw new Error("SocietyID is required");
  }
  try {
    let society = await societyProfile.findOne({
      where: {
        SocietyID,
      },
    });
    console.log(society);
    return society;
  } catch (e) {
    return e;
  }
};


//delete SOCIETY
let RemoveSociety = async (SocietyID) => {
  try {
    // Check if FoodId is provided
    if (!SocietyID) {
      throw new Error("SocietyID is required");
    }

    // Attempt to delete the food item
    let result = await societyProfile.destroy({
      where: {
        SocietyID: SocietyID,
      },
    });

    // Check if the food item was deleted
    if (result === 0) {
      throw new Error(`Society with SocietyID ${SocietyID} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Society with SocietyID ${SocietyID} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing Society with SocietyID ${SocietyID}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewSociety,
  UpdateSociety,
  RemoveSociety,
  FetchAllSociety,
  FetchSociety,
};
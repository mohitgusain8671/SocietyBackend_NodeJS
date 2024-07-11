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
    let [data] = await societyProfile.update(
      {
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
      },
      {
        where: {
            SocietyID
        },
      }
    );

    // Check if any rows were updated
    if (data) {
      // Fetch and return the updated testimonial
      const updated = await societyProfile.findOne({ where: { SocietyID } });
      return updated;
    }

    // If no rows were updated, throw an error
    throw new Error('Society not found');
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

//GET SOCIETY BY Society Coordinator
let FetchSocietyCoordinator = async (SocietyCoordinator) => {
  if (!SocietyCoordinator) {
    throw new Error("SocietyCoordinator name is required");
  }
  try {
    let society = await societyProfile.findOne({
      where: {
        SocietyCoordinator,
      },
    });
    console.log(society);
    return society;
  } catch (e) {
    return e;
  }
};


//GET SOCIETY BY Society Coordinator
let FetchSocietyID = async (SocietyID) => {
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


//delete SOCIETY through its society id
let RemoveSocietyID = async (SocietyID) => {
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



//delete SOCIETY through its society name
let RemoveSocietyName = async (SocietyCoordinator) => {
  try {
    // Check if FoodId is provided
    if (!SocietyCoordinator) {
      throw new Error("SocietyCoordinator is required");
    }

    // Attempt to delete the food item
    let result = await societyProfile.destroy({
      where: {
        SocietyCoordinator: SocietyCoordinator,
      },
    });

    // Check if the food item was deleted
    if (result === 0) {
      throw new Error(`Society with SocietyCoordinator ${SocietyCoordinator} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Society with SocietyCoordinator ${SocietyCoordinator} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing Society with SocietyCoordinator ${SocietyCoordinator}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewSociety,
  UpdateSociety,
  RemoveSocietyID,
  RemoveSocietyName,
  FetchAllSociety,
  FetchSocietyCoordinator,
  FetchSocietyID
};
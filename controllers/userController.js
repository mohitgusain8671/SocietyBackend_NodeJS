const { where } = require("sequelize");
let db = require("../models");

const user = db.User;

//ADD NEW STUDENT
let AddNewUser = async (
    UserID,
    Username,
    Password,
    Email,
    RoleID
) => {
  try {
    let data = await user.create({
      UserID,
      Username,
      Password,
      Email,
      RoleID
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE STUDENT
let UpdateUser = async (
  UserID,
  Username,
  Password,
  Email,
  RoleID
) => {
  try {
    let data = await user.update(
      {
        UserID,
        Username,
        Password,
        Email,
        RoleID
      },
      {
        where: {
          UserID: UserID,
        },
      }
    );
    return data;
  } catch (e) {
    return e;
  }
};


//GET ALL THE STUDENTS
let FetchAllUsers = async () => {
  try {
    let data = await user.findAll({
      order: [
        ["UserID", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};

//GET STUDENT BY ID
let FetchUser = async (UserID) => {
  if (!UserID) {
    throw new Error("UserID is required");
  }
  try {
    let user = await user.findOne({
      where: {
        UserID,
      },
    });
    console.log(user);
    return user;
  } catch (e) {
    return e;
  }
};


//delete STUDENT
let RemoveUser = async (UserID) => {
  try {
    // Check if UserId is provided
    if (!UserID) {
      throw new Error("UserID is required");
    }

    // Attempt to delete the user
    let result = await user.destroy({
      where: {
        UserID: UserID,
      },
    });

    // Check if the user
    if (result === 0) {
      throw new Error(`User with UserID ${UserID} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `User with UserID ${UserID} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing User with UserID ${UserID}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewUser,
  UpdateUser,
  RemoveUser,
  FetchAllUsers,
  FetchUser,
};
const { where } = require("sequelize");
let db = require("../models");

const roles = db.Roles;

//ADD NEW STUDENT
let AddNewRole = async (
    RoleID,
    Rolename,
    LastDateToApply,
    Responsibilities,
    LinkBySociety,
) => {
  try {
    let data = await roles.create({
        RoleID,
        Rolename,
        LastDateToApply,
        Responsibilities,
        LinkBySociety,
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE STUDENT
const UpdateRole = async (RoleID, Rolename, LastDateToApply, Responsibilities, LinkBySociety) => {
  try {
    let data = await roles.update(
      {
        Rolename,
        LastDateToApply,
        Responsibilities,
        LinkBySociety,
      },
      {
        where: {
          RoleID: RoleID,
        },
      }
    );

    return { message: 'Role updated successfully', data: data };
  } catch (e) {
    console.error('Error updating role:', e);
    return { error: e.message };
  }
};


//GET ALL THE ROLES
let FetchAllRoles = async () => {
  try {
    let data = await roles.findAll({
      order: [
        ["RoleID", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};

//GET Role BY name
let FetchRole = async (Rolename) => {
  if (!Rolename) {
    throw new Error("Rolename is required");
  }
  try {
    let role = await roles.findOne({
      where: {
        Rolename: Rolename,
      },
    });
    console.log(role);
    return role;
  } catch (e) {
    return e;
  }
};


//delete STUDENT
let RemoveRole = async (Rolename) => {
  try {
    // Check if FoodId is provided
    if (!Rolename) {
      throw new Error("Rolename is required");
    }

    // Attempt to delete the food item
    let result = await roles.destroy({
      where: {
        Rolename: Rolename,
      },
    });

    // Check if the food item was deleted
    if (result === 0) {
      throw new Error(`Rolename ${Rolename} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Rolename ${Rolename} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing Role with Rolename ${Rolename}:`, e.message);
    return {
      error: e.message,
    };
  }
};

module.exports = {
  AddNewRole,
  UpdateRole,
  RemoveRole,
  FetchAllRoles,
  FetchRole,
};
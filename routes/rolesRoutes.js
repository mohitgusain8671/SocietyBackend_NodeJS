const {
    FetchAllRoles,
    AddNewRole,
    UpdateRole,
    FetchRole,
    RemoveRole,
  } = require('../controllers/rolesController');
  
  const express = require('express');
  const role = express.Router();
  
  //ROUTE TO FETCH ROLES
  role.get("/FetchAllRoles", (req, res) => {
    FetchAllRoles()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD ROLES
  role.post("/AddNewRole", (req, res) => {
    const {
        RoleID,
        Rolename
    } = req.body;
    AddNewRole(
        RoleID,
        Rolename
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO UPDATE ROLE
  role.put("/UpdateRole", (req, res) => {
    const {
        RoleID,
        Rolename
    } = req.body;
    UpdateRole(
        RoleID,
        Rolename
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO GET STUDENT BY ROLE
  role.get("/FetchRole/:Rolename", (req, res) => {
    console.log("Running");
    const Rolename = req.params.Rolename;
    FetchRole(Rolename)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO DELETE A ROLE
  role.delete("/RemoveRole/:Rolename", (req, res) => {
    const Rolename = req.params.Rolename;
    RemoveRole(Rolename)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = role;
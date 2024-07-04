const {
    AddNewSociety,
    UpdateSociety,
    RemoveSociety,
    FetchAllSociety,
    FetchSociety,
  } = require('../controllers/societyProfileController');
  
  const express = require('express');
  const societyProfileRoute = express.Router();
  
  //ROUTE TO FETCH SOCIETIES
  societyProfileRoute.get("/FetchAllSociety", (req, res) => {
    FetchAllSociety()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD SOCIETIES
  societyProfileRoute.post("/AddNewSociety", (req, res) => {
    const {
        SocietyID,
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
    } = req.body;
    AddNewSociety(
        SocietyID,
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO UPDATE SOCIETY
  societyProfileRoute.put("/UpdateSociety", (req, res) => {
    const {
        SocietyID,
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
    } = req.body;
    UpdateSociety(
        SocietyID,
        SocietyType,
        SocietyName,
        SocietyHead,
        SocietyCoordinator,
        DateOfRegistration,
        SocietyDescription,
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO GET SOCIETY BY SOCIETY ID.
  societyProfileRoute.get("/FetchSociety/:SocietyID", (req, res) => {
    console.log("Running");
    const SocietyID = req.params.SocietyID;
    FetchSociety(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO DELETE SOCIETY
  societyProfileRoute.delete("/RemoveSociety/:SocietyID", (req, res) => {
    const SocietyID = req.params.SocietyID;
    RemoveSociety(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = societyProfileRoute;
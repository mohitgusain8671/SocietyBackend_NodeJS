const {
    AddNewSociety,
    UpdateSociety,
    RemoveSocietyID,
    RemoveSocietyName,
    FetchAllSociety,
    FetchSocietyCoordinator,
    FetchSocietyID,
  } = require('../controllers/societyProfileController');
  
  const express = require('express');
  const societyProfileRoute = express.Router();
  

  /**
 * @swagger
 * tags:
 *   name: SocietyProfile
 *   description: Student Profile management
 */


  //ROUTE TO FETCH ALL THE SOCIETIES
  /**
 * @swagger
 * /FetchAllSociety:
 *   get:
 *     summary: Get all the societies
 *     tags: [SocietyProfile]
 *     responses:
 *       200:
 *         description: A list of Societies
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocietyProfile'
 */
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
  /**
 * @swagger
 * /AddNewSociety:
 *   post:
 *     summary: Create a new society
 *     tags: [SocietyProfile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - SocietyID
 *               - SocietyType
 *               - SocietyName
 *               - SocietyHead
 *               - SocietyCoordinator
 *               - DateOfRegistration
 *               - SocietyDescription
 *             properties:
 *               SocietyID:
 *                 type: integer  
 *               SocietyType:
 *                 type: string
 *               SocietyName:
 *                 type: string
 *               SocietyHead:
 *                 type: string
 *               SocietyCoordinator:
 *                 type: string
 *               DateOfRegistration:
 *                 type: string
 *                 format: date-time
 *               SocietyDescription:
 *                 type: string
 *     responses:
 *       201:
 *         description: Society created successfully
 *       400:
 *         description: Bad request
 */
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
  /**
 * @swagger
 * /UpdateSociety/{SocietyID}:
 *   put:
 *     summary: Update a society by it's society id
 *     tags: [SocietyProfile]
 *     parameters:
 *       - in: path
 *         name: SocietyID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Society ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SocietyID:
 *                 type: integer  
 *               SocietyType:
 *                 type: string
 *               SocietyName:
 *                 type: string
 *               SocietyHead:
 *                 type: string
 *               SocietyCoordinator:
 *                 type: string
 *               DateOfRegistration:
 *                 type: string
 *                 format: date-time
 *               SocietyDescription:
 *                 type: string
 *     responses:
 *       200:
 *         description: Society info updated successfully
 *       404:
 *         description: Society not found
 *       400:
 *         description: Bad request
 */
  societyProfileRoute.put("/UpdateSociety/:SocietyID", (req, res) => {
    const SocietyID = req.params.SocietyID;
    const {
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
  /**
 * @swagger
 * /FetchSocietyID/{SocietyID}:
 *   get:
 *     summary: Get a Society by their SocietyID
 *     tags: [SocietyProfile]
 *     parameters:
 *       - in: path
 *         name: SocietyID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Society ID
 *     responses:
 *       200:
 *         description: Society details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SocietyProfile'
 *       404:
 *         description: Society not found
 */
  societyProfileRoute.get("/FetchSocietyID/:SocietyID", (req, res) => {
    console.log("Running");
    const SocietyID = req.params.SocietyID;
    FetchSocietyID(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });


  //ROUTE TO GET SOCIETY BY IT'S COORDINATOR NAME
  /**
 * @swagger
 * /FetchSocietyCoordinator/{SocietyCoordinator}:
 *   get:
 *     summary: Get a Society by their SocietyCoordinator
 *     tags: [SocietyProfile]
 *     parameters:
 *       - in: path
 *         name: SocietyCoordinator
 *         required: true
 *         schema:
 *           type: string
 *         description: Society Coordinator 
 *     responses:
 *       200:
 *         description: Society details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SocietyProfile'
 *       404:
 *         description: Society not found
 */
  societyProfileRoute.get("/FetchSocietyCoordinator/:SocietyCoordinator", (req, res) => {
    console.log("Running");
    const SocietyCoordinator = req.params.SocietyCoordinator;
    FetchSocietyCoordinator(SocietyCoordinator)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO DELETE SOCIETY BY IT'S ID
  /**
 * @swagger
 * /RemoveSocietyID/{SocietyID}:
 *   delete:
 *     summary: Delete a society by it's society id
 *     tags: [SocietyProfile]
 *     parameters:
 *       - in: path
 *         name: SocietyID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Society ID
 *     responses:
 *       204:
 *         description: Society deleted successfully
 *       404:
 *         description: Society not found
 */
  societyProfileRoute.delete("/RemoveSocietyID/:SocietyID", (req, res) => {
    const SocietyID = req.params.SocietyID;
    RemoveSocietyID(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  

  //ROUTE TO DELETE SOCIETY BY IT'S NAME
  /**
 * @swagger
 * /RemoveSocietyName/{SocietyName}:
 *   delete:
 *     summary: Delete a society by it's name
 *     tags: [SocietyProfile]
 *     parameters:
 *       - in: path
 *         name: SocietyName
 *         required: true
 *         schema:
 *           type: string
 *         description: Society Name
 *     responses:
 *       204:
 *         description: Society deleted successfully
 *       404:
 *         description: Society not found
 */
  societyProfileRoute.delete("/RemoveSocietyName/:SocietyName", (req, res) => {
    const SocietyName = req.params.SocietyName;
    RemoveSocietyName(SocietyName)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = societyProfileRoute;
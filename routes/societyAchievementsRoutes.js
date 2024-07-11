const {
    AddNewAchievementSociety,
    UpdateAchievementSociety,
    RemoveAchievementSociety,
    FetchAllAchievementSociety,
  } = require('../controllers/societyAchievementsController');
  
  const express = require('express');
  const SocietyAchievementRoute = express.Router();
  
  /**
 * @swagger
 * tags:
 *   name: SocietyAchievements
 *   description: Society's Achievement management
 */
  
  
//ROUTE TO FETCH ALL THE ACHIEVEMENTS OF THE SOCIETY
  /**
 * @swagger
 * /FetchAllAchievementSociety:
 *   get:
 *     summary: Get achievements of all the societies
 *     tags: [SocietyAchievements]
 *     responses:
 *       200:
 *         description: A list of Achievements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocietyAchievements'
 */
  SocietyAchievementRoute.get("/FetchAllAchievementSociety", (req, res) => {
    FetchAllAchievementSociety()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD ACHIEVEMENTS
  /**
 * @swagger
 * /AddNewAchievementSociety:
 *   post:
 *     summary: Create a new achievement
 *     tags: [SocietyAchievements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - SocietyID
 *               - SocietyAchievementID
 *               - Title
 *               - Description
 *               - DateAchieved
 *             properties:
 *               SocietyID:
 *                   type: integer  
 *               SocietyAchievementID:
 *                 type: integer
 *               Title:
 *                 type: string
 *               Description:
 *                 type: string
 *               DateAchieved:
 *                   type: string
 *                   format: date-time  
 *       responses:
 *         201:
 *           description: Society's achievement created successfully
 *         400:
 *           description: Bad request
 */
  SocietyAchievementRoute.post("/AddNewAchievementSociety", (req, res) => {
    const {
        SocietyID,
        SocietyAchievementID,
        Title,
        Description,
        DateAchieved,
    } = req.body;
    AddNewAchievementSociety(
        SocietyID,
        SocietyAchievementID,
        Title,
        Description,
        DateAchieved,
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO UPDATE SOCIETY'S ACHIEVEMENT
  /**
 * @swagger
 * /UpdateAchievementSociety/{SocietyID}:
 *   put:
 *     summary: Update a society's achievement by their id
 *     tags: [SocietyAchievements]
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
 *                 SocietyID:
 *                   type: integer  
 *                 SocietyAchievementID:
 *                   type: integer
 *                 Title:
 *                   type: string
 *                 Description:
 *                   type: string
 *                 DateAchieved:
 *                   type: string
 *                   format: date-time 
 *     responses:
 *       200:
 *         description: Society achievement updated successfully
 *       404:
 *         description: Society Achievement not found
 *       400:
 *         description: Bad request
 */
  SocietyAchievementRoute.put("/UpdateAchievementSociety/:SocietyID", (req, res) => {
    const SocietyID = req.params.SocietyID;
    const {
        SocietyAchievementID,
        Title,
        Description,
        DateAchieved,
    } = req.body;
    UpdateAchievementSociety(
        SocietyID,
        SocietyAchievementID,
        Title,
        Description,
        DateAchieved,
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  

  
//ROUTE TO DELETE SOCIETY'S ACHIEVEMENT
  /**
 * @swagger
 * /RemoveAchievementSociety/{SocietyID}:
 *   delete:
 *     summary: Delete a society's achievement by their id.
 *     tags: [SocietyAchievements]
 *     parameters:
 *       - in: path
 *         name: SocietyID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Society ID
 *     responses:
 *       204:
 *         description: Society Achievement deleted successfully
 *       404:
 *         description: Society's Achievement not found
 */
  SocietyAchievementRoute.delete("/RemoveAchievementSociety/:SocietyID", (req, res) => {
    const SocietyID = req.params.SocietyID;
    RemoveAchievementSociety(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = SocietyAchievementRoute;
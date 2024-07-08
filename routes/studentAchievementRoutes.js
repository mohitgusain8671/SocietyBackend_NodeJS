const {
    AddNewAchievement,
    UpdateAchievement,
    RemoveAchievement,
    FetchAllAchievement,
    FetchAchievements,
  } = require('../controllers/studentAchievementController');
  
  const express = require('express');
  const StudentAchievementRoute = express.Router();
  
  /**
 * @swagger
 * tags:
 *   name: StudentAchievements
 *   description: Student's Achievement(in the society) management
 */
  
  
//ROUTE TO FETCH ALL THE ACHIEVEMENTS
  /**
 * @swagger
 * /FetchAllAchievement:
 *   get:
 *     summary: Get achievements of all the students
 *     tags: [StudentAchievements]
 *     responses:
 *       200:
 *         description: A list of Achievements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentAchievements'
 */
  StudentAchievementRoute.get("/FetchAllAchievement", (req, res) => {
    FetchAllAchievement()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });



//ROUTE TO GET STUDENT ACHIEVEMENT BY ENROLLMENT NO.
/**
 * @swagger
 * /FetchAchievements/{EnrollmentNo}:
 *   get:
 *     summary: Get a Student achievement by their EnrollmentNo
 *     tags: [StudentAchievements]
 *     parameters:
 *       - in: path
 *         name: EnrollmentNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Enrollment No
 *     responses:
 *       200:
 *         description: Student achievement details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentAchievements'
 *       404:
 *         description: Student achievement not found
 */
StudentAchievementRoute.get("/FetchAchievements/:EnrollmentNo", (req, res) => {
  console.log("Running");
  const EnrollmentNo = req.params.EnrollmentNo;
  FetchAchievements(EnrollmentNo)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});
  
  
  //ROUTE TO ADD ACHIEVEMENTS
  /**
 * @swagger
 * /AddNewAchievement:
 *   post:
 *     summary: Create a new achievement
 *     tags: [StudentAchievements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - EnrollmentNo
 *               - AchievementID
 *               - Title
 *               - Description
 *               - DateAchieved
 *             properties:
 *               EnrollmentNo:
 *                   type: integer  
 *               AchievementID:
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
 *           description: Student's achievement created successfully
 *         400:
 *           description: Bad request
 */
    StudentAchievementRoute.post("/AddNewAchievement", (req, res) => {
    const {
        EnrollmentNo,
        AchievementID,
        Title,
        Description,
        DateAchieved,
    } = req.body;
    AddNewAchievement(
        EnrollmentNo,
        AchievementID,
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
  
  
  //ROUTE TO UPDATE STUDENT'S ACHIEVEMENT
  /**
 * @swagger
 * /UpdateAchievement/{EnrollmentNo}:
 *   put:
 *     summary: Update a student's achievement by their enrollment no.
 *     tags: [StudentAchievements]
 *     parameters:
 *       - in: path
 *         name: EnrollmentNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: EnrollmentNo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 EnrollmentNo:
 *                   type: integer  
 *                 AchievementID:
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
 *         description: Student achievement updated successfully
 *       404:
 *         description: Student not found
 *       400:
 *         description: Bad request
 */
  StudentAchievementRoute.put("/UpdateAchievement", (req, res) => {
    const {
        EnrollmentNo,
        AchievementID,
        Title,
        Description,
        DateAchieved,
    } = req.body;
    UpdateAchievement(
        EnrollmentNo,
        AchievementID,
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
  

  
//ROUTE TO DELETE STUDENT'S ACHIEVEMENT
  /**
 * @swagger
 * /RemoveAchievement/{EnrollmentNo}:
 *   delete:
 *     summary: Delete a student's achievement by their enrollment no.
 *     tags: [StudentAchievements]
 *     parameters:
 *       - in: path
 *         name: EnrollmentNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Enrollment No
 *     responses:
 *       204:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 */
  StudentAchievementRoute.delete("/RemoveAchievement/:EnrollmentNo", (req, res) => {
    const EnrollmentNo = req.params.EnrollmentNo;
    RemoveAchievement(EnrollmentNo)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = StudentAchievementRoute;
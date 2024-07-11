const {
    AddNewMarking,
    UpdateMarking,
    RemoveMarking,
    FetchAllMarkings,
  } = require('../controllers/studentMarkingsController');
  
  const express = require('express');
  const StudentMarkingRoute = express.Router();
  
  /**
 * @swagger
 * tags:
 *   name: StudentMarking
 *   description: Student's Marking(in the society) management
 */
  
  
//ROUTE TO FETCH ALL THE MARKINGS
  /**
 * @swagger
 * /FetchAllMarkings:
 *   get:
 *     summary: Get society markings of all the students
 *     tags: [StudentMarking]
 *     responses:
 *       200:
 *         description: A list of Markings assigned to the students by the society
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentMarking'
 */
  StudentMarkingRoute.get("/FetchAllMarkings", (req, res) => {
    FetchAllMarkings()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD NEW MARKINGS
  /**
 * @swagger
 * /AddNewMarking:
 *   post:
 *     summary: Create a new student marking
 *     tags: [StudentMarking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - EnrollmentNo
 *               - StudentGrades
 *             properties:
 *               EnrollmentNo:
 *                 type: integer  
 *               StudentGrades:
 *                 type: string
 *       responses:
 *         201:
 *           description: Student's marking created successfully
 *         400:
 *           description: Bad request
 */
  StudentMarkingRoute.post("/AddNewMarking", (req, res) => {
    const {
        EnrollmentNo,
        StudentGrades,
    } = req.body;
    AddNewMarking(
        EnrollmentNo,
        StudentGrades,
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
 * /UpdateMarking/{EnrollmentNo}:
 *   put:
 *     summary: Update a student's marking in the society by their enrollment no.
 *     tags: [StudentMarking]
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
 *               EnrollmentNo:
 *                 type: integer  
 *               StudentGrades:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student marking updated successfully
 *       404:
 *         description: Student not found
 *       400:
 *         description: Bad request
 */
  StudentMarkingRoute.put("/UpdateMarking/:EnrollmentNo", (req, res) => {
    const EnrollmentNo = req.params.EnrollmentNo;
    const {
        StudentGrades,
    } = req.body;
    UpdateMarking(
        EnrollmentNo,
        StudentGrades,
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  

  
//ROUTE TO DELETE STUDENT'S MARKING
  /**
 * @swagger
 * /RemoveMarking/{EnrollmentNo}:
 *   delete:
 *     summary: Delete a student's marking by their enrollment no.
 *     tags: [StudentMarking]
 *     parameters:
 *       - in: path
 *         name: EnrollmentNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: Enrollment No
 *     responses:
 *       204:
 *         description: Student's marking deleted successfully
 *       404:
 *         description: Student not found
 */
  StudentMarkingRoute.delete("/RemoveMarking/:EnrollmentNo", (req, res) => {
    const EnrollmentNo = req.params.EnrollmentNo;
    RemoveMarking(EnrollmentNo)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = StudentMarkingRoute;
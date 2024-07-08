const {
  FetchAllStudents,
  AddNewStudent,
  UpdateStudent,
  FetchStudent,
  RemoveStudent,
  FetchContributions,
} = require('../controllers/studentProfileController');

const express = require('express');
const studentProfileRoute = express.Router();

/**
 * @swagger
 * tags:
 *   name: StudentProfile
 *   description: Student Profile management
 */


  //ROUTE TO FETCH ALL THE STUDENTS
  /**
 * @swagger
 * /FetchAllStudents:
 *   get:
 *     summary: Get all the students of all the societies
 *     tags: [StudentProfile]
 *     responses:
 *       200:
 *         description: A list of Students
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/StudentProfile'
 */
studentProfileRoute.get("/FetchAllStudents", (req, res) => {
    FetchAllStudents()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//ROUTE TO ADD STUDENTS
  /**
 * @swagger
 * /AddNewStudent:
 *   post:
 *     summary: Create a new student
 *     tags: [StudentProfile]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *              - EnrollmentNo
 *              - UserID
 *              - FirstName
 *              - LastName
 *              - Branch
 *              - BatchYear
 *              - MobileNo
 *              - ProfilePicture
 *              - SocietyName
 *              - SocietyPosition
 *              - StudentContributions
 *             properties:
 *               EnrollmentNo:
 *                 type: integer  
 *               UserID:
 *                 type: integer
 *               FirstName:
 *                 type: string
 *               LastName:
 *                 type: string
 *               Branch:
 *                 type: string
 *               BatchYear:
 *                 type: integer
 *               MobileNo:
 *                 type: string
 *               ProfilePicture:
 *                 type: string
 *                 format: binary
 *               SocietyName:
 *                 type: string
 *               SocietyPosition:
 *                 type: string
 *               StudentContributions:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student created successfully
 *       400:
 *         description: Bad request
 */
studentProfileRoute.post("/AddNewStudent", (req, res) => {
  const {
    EnrollmentNo,
    UserID,
    FirstName,
    LastName,
    Branch,
    BatchYear,
    MobileNo,
    ProfilePicture,
    SocietyName,
    SocietyPosition,
    StudentContributions,
  } = req.body;
  AddNewStudent(
    EnrollmentNo,
    UserID,
    FirstName,
    LastName,
    Branch,
    BatchYear,
    MobileNo,
    ProfilePicture,
    SocietyName,
    SocietyPosition,
    StudentContributions,
  )
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//ROUTE TO UPDATE STUDENT
/**
 * @swagger
 * /UpdateStudent/{EnrollmentNo}:
 *   put:
 *     summary: Update a student by their enrollment no.
 *     tags: [StudentProfile]
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
 *               UserID:
 *                 type: integer
 *               FirstName:
 *                 type: string
 *               LastName:
 *                 type: string
 *               Branch:
 *                 type: string
 *               BatchYear:
 *                 type: integer
 *               MobileNo:
 *                 type: string
 *               ProfilePicture:
 *                 type: string
 *                 format: binary
 *               SocietyName:
 *                 type: string
 *               SocietyPosition:
 *                 type: string
 *               StudentContributions:
 *                 type: string
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 *       400:
 *         description: Bad request
 */
studentProfileRoute.put("/UpdateStudent", (req, res) => {
  const {
    EnrollmentNo,
    UserID,
    FirstName,
    LastName,
    Branch,
    BatchYear,
    MobileNo,
    ProfilePicture,
    SocietyName,
    SocietyPosition,
    StudentContributions,
  } = req.body;
  UpdateStudent(
    EnrollmentNo,
    UserID,
    FirstName,
    LastName,
    Branch,
    BatchYear,
    MobileNo,
    ProfilePicture,
    SocietyName,
    SocietyPosition,
    StudentContributions,
  )
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//ROUTE TO GET STUDENT BY ENROLLMENT NO.
/**
 * @swagger
 * /FetchStudent/{EnrollmentNo}:
 *   get:
 *     summary: Get a Student by their EnrollmentNo
 *     tags: [StudentProfile]
 *     parameters:
 *       - in: path
 *         name: EnrollmentNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: EnrollmentNo
 *     responses:
 *       200:
 *         description: Student details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentProfile'
 *       404:
 *         description: Student not found
 */
studentProfileRoute.get("/FetchStudent/:EnrollmentNo", (req, res) => {
  console.log("Running");
  const EnrollmentNo = req.params.EnrollmentNo;
  FetchStudent(EnrollmentNo)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});



//ROUTE TO GET STUDENT CONTRIBUTIONS BY ENROLLMENT NO.
/**
 * @swagger
 * /FetchContributions/{EnrollmentNo}:
 *   get:
 *     summary: Get a Student contributions by their EnrollmentNo
 *     tags: [StudentProfile]
 *     parameters:
 *       - in: path
 *         name: EnrollmentNo
 *         required: true
 *         schema:
 *           type: integer
 *         description: EnrollmentNo
 *     responses:
 *       200:
 *         description: Student contribution details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StudentProfile'
 *       404:
 *         description: Student contribution not found
 */
studentProfileRoute.get("/FetchContributions/:EnrollmentNo", (req, res) => {
  console.log("Running");
  const EnrollmentNo = req.params.EnrollmentNo;
  FetchContributions(EnrollmentNo)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//ROUTE TO DELETE STUDENT
  /**
 * @swagger
 * /RemoveStudent/{EnrollmentNo}:
 *   delete:
 *     summary: Delete a student by their enrollment no.
 *     tags: [StudentProfile]
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
studentProfileRoute.delete("/RemoveStudent/:EnrollmentNo", (req, res) => {
  const EnrollmentNo = req.params.EnrollmentNo;
  RemoveStudent(EnrollmentNo)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


module.exports = studentProfileRoute;
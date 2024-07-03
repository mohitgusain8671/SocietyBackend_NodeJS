const {
  FetchAllStudents,
  AddNewStudent,
  UpdateStudent,
  FetchStudent,
  RemoveStudent,
} = require('../controllers/studentProfileController');

const express = require('express');
const studentProfileRoute = express.Router();

//ROUTE TO FETCH STUDENTS
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
    SocietyPosition
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
    SocietyPosition
  )
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//ROUTE TO UPDATE STUDENT
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
    SocietyPosition
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
    SocietyPosition
  )
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


//ROUTE TO GET STUDENT BY ENROLLMENT NO.
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


//ROUTE TO DELETE STUDENT
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
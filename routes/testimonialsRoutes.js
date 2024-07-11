const {
    AddNewTestimonial,
    UpdateTestimonial,
    RemoveTestimonial,
    FetchAllTestimonials,
    FetchTestimonialID,
  } = require('../controllers/testimonialsController');
  
  const express = require('express');
  const testimonialsRoute = express.Router();
  // const bodyParser = require('body-parser');
  // app.use(bodyParser.json());
  
  /**
   * @swagger
   * tags:
   *   name: Testimonials
   *   description: Testimonials management
   */
  
  
    //ROUTE TO FETCH ALL THE TESTIMONIALS
    /**
   * @swagger
   * /FetchAllTestimonials:
   *   get:
   *     summary: Get all the testimonials of all the societies
   *     tags: [Testimonials]
   *     responses:
   *       200:
   *         description: A list of the testimonials
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Testimonials'
   */
    testimonialsRoute.get("/FetchAllTestimonials", (req, res) => {
    FetchAllTestimonials()
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
   * /AddNewTestimonial:
   *   post:
   *     summary: Create a new Testimonial
   *     tags: [Testimonials]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             required:
   *              - EnrollmentNo
   *              - TestimonialDescription
   *             properties:
   *               EnrollmentNo:
   *                 type: integer  
   *               TestimonialDescription:
   *                 type: string
   *     responses:
   *       200:
   *         description: Testimonial created successfully
   *       400:
   *         description: Bad request
   */
    testimonialsRoute.post("/AddNewTestimonial", (req, res) => {
    const {
        EnrollmentNo,
        TestimonialDescription,
    } = req.body;
    AddNewTestimonial(
        EnrollmentNo,
        TestimonialDescription,
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
   * /UpdateTestimonial/{EnrollmentNo}:
   *   put:
   *     summary: Update a Testimonial by the student enrollment no.
   *     tags: [Testimonials]
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
   *               TestimonialDescription:
   *                 type: string
   *     responses:
   *       200:
   *         description: Testimonial updated successfully
   *       404:
   *         description: Testimonial not found
   *       400:
   *         description: Bad request
   */
  testimonialsRoute.put("/UpdateTestimonial/:EnrollmentNo", (req, res) => {
    const EnrollmentNo = req.params.EnrollmentNo;
    const {TestimonialDescription} = req.body;

    UpdateTestimonial(
        EnrollmentNo,
        TestimonialDescription
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
   * /FetchTestimonialID/{EnrollmentNo}:
   *   get:
   *     summary: Get a Testimonial by the student EnrollmentNo
   *     tags: [Testimonials]
   *     parameters:
   *       - in: path
   *         name: EnrollmentNo
   *         required: true
   *         schema:
   *           type: integer
   *         description: EnrollmentNo
   *     responses:
   *       200:
   *         description: Testimonial details
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Testimonials'
   *       404:
   *         description: Testimonial not found
   */
  testimonialsRoute.get("/FetchTestimonialID/:EnrollmentNo", (req, res) => {
    console.log("Running");
    const EnrollmentNo = req.params.EnrollmentNo;
    FetchTestimonialID(EnrollmentNo)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO DELETE Testimonial
    /**
   * @swagger
   * /RemoveTestimonial/{EnrollmentNo}:
   *   delete:
   *     summary: Delete a Testimonial by the student enrollment no.
   *     tags: [Testimonials]
   *     parameters:
   *       - in: path
   *         name: EnrollmentNo
   *         required: true
   *         schema:
   *           type: integer
   *         description: Enrollment No
   *     responses:
   *       204:
   *         description: Testimonial deleted successfully
   *       404:
   *         description: Testimonial not found
   */
    testimonialsRoute.delete("/RemoveTestimonial/:EnrollmentNo", (req, res) => {
    const EnrollmentNo = req.params.EnrollmentNo;
    RemoveTestimonial(EnrollmentNo)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = testimonialsRoute;
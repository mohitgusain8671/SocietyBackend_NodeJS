const {
    AddNewEvent,
    UpdateEvent,
    RemoveEvent,
    RemoveEvents,
    FetchAllEvents,
    FetchEvent,
    FetchEventSociety
  } = require('../controllers/societyEventsController');
  
  const express = require('express');
  const societyEvent = express.Router();
  
  /**
 * @swagger
 * tags:
 *   name: SocietyEvents
 *   description: Society Events management
 */


  //ROUTE TO FETCH SOCIETY EVENTS
  /**
 * @swagger
 * /FetchAllEvents:
 *   get:
 *     summary: Get all the society events
 *     tags: [SocietyEvents]
 *     responses:
 *       200:
 *         description: A list of SocietyEvents
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SocietyEvents'
 */
  societyEvent.get("/FetchAllEvents", (req, res) => {
    FetchAllEvents()
      .then((items) => {
        res.status(200).json(items);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  //ROUTE TO ADD EVENTS OF THE SOCIETY
  /**
 * @swagger
 * /AddNewEvent:
 *   post:
 *     summary: Create a new society event
 *     tags: [SocietyEvents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - SocietyID
 *               - EventID
 *               - Title
 *               - Description
 *               - EventType
 *               - ModeOfEvent
 *               - Location
 *               - EventDateTime
 *             properties:
 *               SocietyID:
 *                 type: integer  
 *               EventID:
 *                 type: integer
 *               Title:
 *                 type: string
 *               Description:
 *                 type: string
 *               EventType:
 *                 type: string
 *               ModeOfEvent:
 *                 type: string
 *               Location:
 *                 type: string
 *               EventDateTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Society event created successfully
 *       400:
 *         description: Bad request
 */
  societyEvent.post("/AddNewEvent", (req, res) => {
    const {
      SocietyID,
      EventID,
      Title,
      Description,
      EventType,
      ModeOfEvent,
      Location,
      EventDateTime
    } = req.body;
    AddNewEvent(
      SocietyID,
      EventID,
      Title,
      Description,
      EventType,
      ModeOfEvent,
      Location,
      EventDateTime
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  

  //ROUTE TO UPDATE SOCIETY EVENT
  /**
 * @swagger
 * /UpdateEvent/{EventID}:
 *   put:
 *     summary: Update a society event by the ID of the event
 *     tags: [SocietyEvents]
 *     parameters:
 *       - in: path
 *         name: EventID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               SocietyID:
 *                 type: integer  
 *               EventID:
 *                 type: integer
 *               Title:
 *                 type: string
 *               Description:
 *                 type: string
 *               EventType:
 *                 type: string
 *               ModeOfEvent:
 *                 type: string
 *               Location:
 *                 type: string
 *               EventDateTime:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       200:
 *         description: Society event updated successfully
 *       404:
 *         description: society event not found
 *       400:
 *         description: Bad request
 */
  societyEvent.put("/UpdateEvent/:EventID", (req, res) => {
    const EventID = req.params.EventID;
    const {
      SocietyID,
      Title,
      Description,
      EventType,
      ModeOfEvent,
      Location,
      EventDateTime
    } = req.body;
    UpdateEvent(
      SocietyID,
      EventID,
      Title,
      Description,
      EventType,
      ModeOfEvent,
      Location,
      EventDateTime
    )
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  

  
  //ROUTE TO GET A SOCIETY EVENT BY IT'S ID
  /**
 * @swagger
 * /FetchEvent/{EventID}:
 *   get:
 *     summary: Get a Society event by its id
 *     tags: [SocietyEvents]
 *     parameters:
 *       - in: path
 *         name: EventID
 *         required: true
 *         schema:
 *           type: integer
 *         description: Event ID
 *     responses:
 *       200:
 *         description: Event details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SocietyEvents'
 *       404:
 *         description: Event not found
 */
  societyEvent.get("/FetchEvent/:EventID", (req, res) => {
    console.log("Running");
    const EventID = req.params.EventID;
    FetchEvent(EventID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });


  //ROUTE TO GET ALL THE SOCIETY EVENTS OF A PARTICULAR SOCIETY
  /**
 * @swagger
 * /FetchEventSociety/{SocietyID}:
 *   get:
 *     summary: Get all the Society events of a particular society 
 *     tags: [SocietyEvents]
 *     parameters:
 *       - in: path
 *         name: SocietyID
 *         required: true
 *         schema:
 *           type: integer
 *         description: SocietyID ID
 *     responses:
 *       200:
 *         description: Society Event details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SocietyEvents'
 *       404:
 *         description: Society Event not found
 */
  societyEvent.get("/FetchEventSociety/:SocietyID", (req, res) => {
    console.log("Running");
    const SocietyID = req.params.SocietyID;
    FetchEventSociety(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });
  
  

  //ROUTE TO DELETE A SOCIETY EVENT
  /**
 * @swagger
 * /RemoveEvent/{EventID}:
 *   delete:
 *     summary: Delete a EVENT by it's ID
 *     tags: [SocietyEvents]
 *     parameters:
 *       - in: path
 *         name: EventID
 *         required: true
 *         schema:
 *           type: integer
 *         description: EventID
 *     responses:
 *       204:
 *         description: Event deleted successfully
 *       404:
 *         description: Event not found
 */
  societyEvent.delete("/RemoveEvent/:EventID", (req, res) => {
    const EventID = req.params.EventID;
    RemoveEvent(EventID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });



  //ROUTE TO DELETE ALL THE EVENTS OF A SOCIETY
  /**
 * @swagger
 * /RemoveEvents/{SocietyID}:
 *   delete:
 *     summary: Delete all the EVENT of a society by the society ID
 *     tags: [SocietyEvents]
 *     parameters:
 *       - in: path
 *         name: SocietyID
 *         required: true
 *         schema:
 *           type: integer
 *         description: SocietyID
 *     responses:
 *       204:
 *         description: Society Events deleted successfully
 *       404:
 *         description: Society not found
 */
  societyEvent.delete("/RemoveEvents/:SocietyID", (req, res) => {
    const SocietyID = req.params.SocietyID;
    RemoveEvents(SocietyID)
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  
  module.exports = societyEvent;


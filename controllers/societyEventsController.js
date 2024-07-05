const { where } = require("sequelize");
let db = require("../models");

const SocietyEvents = db.SocietyEvents;

//ADD NEW STUDENT
let AddNewEvent = async (
    SocietyID,
    EventID,
    Title,
    Description,
    EventType,
    ModeOfEvent,
    Location,
    EventDateTime
) => {
  try {
    let data = await SocietyEvents.create({
        SocietyID,
        EventID,
        Title,
        Description,
        EventType,
        ModeOfEvent,
        Location,
        EventDateTime
    });
    return data;
  } catch (e) {
    return e;
  }
};


//UPDATE STUDENT
let UpdateEvent = async (
    SocietyID,
    EventID,
    Title,
    Description,
    EventType,
    ModeOfEvent,
    Location,
    EventDateTime
) => {
  try {
    let data = await SocietyEvents.update(
      {
        SocietyID,
        EventID,
        Title,
        Description,
        EventType,
        ModeOfEvent,
        Location,
        EventDateTime
      },
      {
        where: {
            SocietyID: SocietyID,
        },
      }
    );
    return data;
  } catch (e) {
    return e;
  }
};


//GET ALL THE EVENTS IN ONE GO
let FetchAllEvents = async () => {
  try {
    let data = await SocietyEvents.findAll({
      order: [
        ["SocietyID", "ASC"], 
      ],
    });

    return data;
  } catch (e) {
    return;
  }
};

//GET SOCIETY EVENT BY THE EVENT ID
let FetchEvent = async (EventID) => {
  if (!EventID) {
    throw new Error("EventID is required");
  }
  try {
    let event = await SocietyEvents.findOne({
      where: {
        EventID,
      },
    });
    console.log(event);
    return event;
  } catch (e) {
    return e;
  }
};


//GET ALL THE EVENTS OF A SOCIETY
let FetchEventSociety = async (SocietyID) => {
  if (!SocietyID) {
    throw new Error("SocietyID is required");
  }
  try {
    let event = await SocietyEvents.findOne({
      where: {
        SocietyID,
      },
    });
    console.log(event);
    return event;
  } catch (e) {
    return e;
  }
};

//delete all the events particular society
let RemoveEvents = async (SocietyID) => {
  try {
    // Check if SocietyID is provided
    if (!SocietyID) {
      throw new Error("SocietyID is required");
    }

    // Attempt to delete the event
    let result = await SocietyEvents.destroy({
      where: {
        SocietyID: SocietyID,
      },
    });

    // Check if the event is deleted
    if (result === 0) {
      throw new Error(`Event with SocietyID ${SocietyID} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Event with SocietyID ${SocietyID} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing User with SocietyID ${SocietyID}:`, e.message);
    return {
      error: e.message,
    };
  }
};


//delete a particular event 
let RemoveEvent = async (EventID) => {
  try {
    // Check if EventID is provided
    if (!EventID) {
      throw new Error("EventID is required");
    }

    // Attempt to delete the event
    let result = await SocietyEvents.destroy({
      where: {
        EventID: EventID,
      },
    });

    // Check if the event is deleted
    if (result === 0) {
      throw new Error(`Event with EventID ${EventID} not found`);
    }

    // Return the result of the deletion operation
    return {
      message: `Event with EventID ${EventID} successfully deleted`,
      result: result,
    };
  } catch (e) {
    console.error(`Error removing Event with EventID ${EventID}:`, e.message);
    return {
      error: e.message,
    };
  }
};


module.exports = {
  AddNewEvent,
  UpdateEvent,
  RemoveEvent,
  RemoveEvents,
  FetchAllEvents,
  FetchEvent,
  FetchEventSociety
};
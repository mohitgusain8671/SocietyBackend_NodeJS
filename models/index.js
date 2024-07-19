const Sequelize = require("sequelize");
const config = require("../config/config");
require("dotenv").config();

// const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: false,
      },
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to Sequelize");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//load models
db.User = require("./user")(sequelize, Sequelize);
db.Roles = require("./roles")(sequelize, Sequelize);
db.SocietyProfile = require("./societyProfile")(sequelize, Sequelize);
db.SocietyEvents = require("./societyEvents")(sequelize, Sequelize);
db.StudentProfile = require("./studentProfile")(sequelize, Sequelize);
db.StudentAchievements = require("./studentAchievements")(sequelize, Sequelize);
db.SocietyAchievements = require("./societyAchievements")(sequelize, Sequelize);
db.StudentMarking = require("./studentMarking")(sequelize, Sequelize);
db.Testimonials = require("./testimonials")(sequelize, Sequelize);

db.sequelize
  .sync({ alter: true }, { force: false })
  .then(() => {
    console.log("Sync Success");
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });

module.exports = db;

const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});

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
db.User = require('./user')(sequelize, Sequelize);
db.Roles = require('./roles')(sequelize, Sequelize)
db.SocietyEvents = require('./societyEvents')(sequelize, Sequelize)
db.StudentProfile = require('./studentProfile')(sequelize, Sequelize)
db.StudentProfile = require('./studentAchievements')(sequelize, Sequelize)
db.StudentProfile = require('./societyAchievements')(sequelize, Sequelize)
db.StudentProfile = require('./societyProfile')(sequelize, Sequelize)

db.sequelize
  .sync({alter: true},{force: false})
  .then(() => {
    console.log("Sync Success");
  })
  .catch((err) => {
    console.error("Error syncing the database:", err);
  });

module.exports = db;

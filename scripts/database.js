const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config');
const { Roles } = require('../models');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Create a new Sequelize instance
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
});


// Function to create the database
async function createDatabase() {
  try {
    // Connect to the database server
    const sequelizeRaw = new Sequelize('', dbConfig.username, dbConfig.password, {
      host: dbConfig.host,
      dialect: dbConfig.dialect,
    });

    // Create the database
    await sequelizeRaw.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`);

    console.log(`Database ${dbConfig.database} created or already exists.`);
  } catch (error) {
    console.error('Error creating database:', error);
  }
//   } finally {
//     // Close the raw Sequelize instance
//     await sequelize.close();
//   }
}
const db = {}


// Function to sync models and create tables
async function syncModels() {
  try {
    // Import models
      db.require('./user')(sequelize, DataTypes),
      db.require('./roles')(sequelize, DataTypes),
      db.require('./societyEvents')(sequelize, DataTypes),
      db.require('./studentProfile')(sequelize, DataTypes),
      db.require('./studentAchievements')(sequelize, DataTypes),
      db.require('./societyAchievements')(sequelize, DataTypes),
      db.require('./societyProfile')(sequelize, DataTypes),

    // Sync all defined models to the DB
    await db.sequelize.sync({force: false}); // use { alter: true } to update tables without dropping
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  } 
  // finally {
  //   // Close the Sequelize instance
  //   await sequelize.close();
  // }
}

(async () => {
  await createDatabase();
  await syncModels();
})();

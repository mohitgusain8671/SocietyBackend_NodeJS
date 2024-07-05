const express = require('express');
const userRoutes = require('./routes/userRoutes');
const studentProfileRoutes = require('./routes/studentProfileRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const societyProfileRouteRoutes = require('./routes/societyProfileRoutes');
const setupSwaggerDocs = require('./config/swagger');
const societyEventsRoutes = require('./routes/societyEventsRoutes');
const studentAchievementRoutes = require('./routes/studentAchievementRoutes');   
const societyAchievementRoutes = require('./routes/societyAchievementsRoutes');   

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', studentProfileRoutes)
app.use('/api', rolesRoutes)
app.use('/api', societyProfileRouteRoutes)
app.use('/api', societyEventsRoutes)
app.use('/api', studentAchievementRoutes)
app.use('/api', societyAchievementRoutes)

// Setup Swagger docs
setupSwaggerDocs(app);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
  console.log(`Swagger docs available at http://localhost:${port}/docs`);
});

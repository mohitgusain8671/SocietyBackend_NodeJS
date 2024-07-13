const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const studentProfileRoutes = require('./routes/studentProfileRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const societyProfileRouteRoutes = require('./routes/societyProfileRoutes');
const societyEventsRoutes = require('./routes/societyEventsRoutes');
const studentAchievementRoutes = require('./routes/studentAchievementRoutes');   
const societyAchievementRoutes = require('./routes/societyAchievementsRoutes');   
const studentMarkingRoutes = require('./routes/studentMarkingsRoutes');   
const testimonialRoutes = require('./routes/testimonialsRoutes');   

const setupSwaggerDocs = require('./config/swagger');
const cors = require("cors");
const cookieParser = require('cookie-parser');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: '*',
  credentials: true,
}));

// const allowedOrigins = [process.env.GUEST_URL, process.env.ADMIN_URL];
// app.use(
//   cors({
//     origin: function (origin, callback) {

//       // allow requests with no origin (like mobile apps, curl requests)
//       if (!origin) return callback(null, true);

//       if (allowedOrigins.indexOf(origin) !== -1) {
//         return callback(null, true);
//       } else {
//         const msg =
//           "The CORS policy for this site does not allow access from the specified Origin.";
//         return callback(new Error(msg), false);
//       }
//     },
//     credentials: true,
//   })
// );

app.use('/api', userRoutes);
app.use('/api', studentProfileRoutes)
app.use('/api', rolesRoutes)
app.use('/api', societyProfileRouteRoutes)
app.use('/api', societyEventsRoutes)
app.use('/api', studentAchievementRoutes)
app.use('/api', societyAchievementRoutes)
app.use('/api', studentMarkingRoutes)
app.use('/api', testimonialRoutes)

// Setup Swagger docs
setupSwaggerDocs(app);

app.get("/", async (req, res) => {
  console.log(req.cookies);
  res.send("Server Started, This is Homepage");
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/docs`);
});

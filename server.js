const express = require('express');
// const User = require('./models/user');
const userRoutes = require('./routes/userRoutes');
const studentProfileRoutes = require('./routes/studentProfileRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
// const studentProfile = require('./models/studentProfile');
// const studentProfileController = require('./controllers/studentProfileController');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', studentProfileRoutes)
app.use('/api', rolesRoutes)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

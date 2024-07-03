const express = require('express');
const userRoutes = require('./routes/userRoutes');
const studentProfileRoutes = require('./routes/studentProfileRoutes');
const rolesRoutes = require('./routes/rolesRoutes');
const societyProfileRouteRoutes = require('./routes/societyProfileRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', studentProfileRoutes)
app.use('/api', rolesRoutes)
app.use('/api', societyProfileRouteRoutes)

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

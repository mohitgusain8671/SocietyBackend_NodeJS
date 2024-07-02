const express = require('express');
const User = require('./models/user');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const signupRoute = require('./routes/signup');
const managerSignupRoute = require('./routes/managerSignup');
const loginRoute = require('./routes/login');
const adminLoginRoute = require('./routes/adminLogin1'); // Corrected path for adminLogin1.js
const logoutRoute = require('./routes/logout').router; // Correct import for named export
const addRoomRoute = require('./routes/addRoom1');
const checkRoomNumber = require('./routes/checkRoomNumber');
const authenticateToken = require('./middleware/auth');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api', signupRoute);
app.use('/api', managerSignupRoute);
app.use('/api', loginRoute);
app.use('/api', adminLoginRoute); // Ensure adminLogin1.js is being imported correctly
app.use('/api', logoutRoute);
app.use('/api', addRoomRoute);
app.use('/api', checkRoomNumber);

app.get('/api/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the Dashboard!' });
});

app.listen(port, (err) => {
  if (err) {
    console.error('Error starting server:', err);
  } else {
    console.log(`Server is running on port: ${port}`);
  }
});

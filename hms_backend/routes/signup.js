const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const pool = require("../db");

router.post('/signup', async (req, res) => {
  const { uId, employeeName, password, companyName, age, phoneNumber, address, role } = req.body;

  try {
    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);
   
  
    const query = 'INSERT INTO LoginInfo (u_id, employeeName, Password, companyName, age, phoneNumber, address, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

    pool.query(query, [uId, employeeName, hashedPassword, companyName, age, phoneNumber, address, role], (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'Database error' });
        return;
      }
      res.status(201).json({ message: 'User signed up successfully', userId: results.insertId });
    });
  } catch (error) {
    console.error('Error encrypting password:', error);
    res.status(500).json({ error: 'Encryption error' });
  }
});

module.exports = router;

const express = require('express');
const serverConfig = require('./serverConfig');
const path = require('path');
const nodemailer = require('nodemailer'); // Import nodemailer

const app = express();

app.use(express.json());

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle contact form submission
app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    // Specify your email service provider
    service: 'gmail',
    auth: {
      user: 'noahwyche1@gmail.com', // Your email address
      pass: '5710slapstick!' // Your email password
    }
  });

  // Email options
  const mailOptions = {
    from: email,
    to: 'noahwyche1@gmail.com', // Your email address
    subject: `New message from ${name}`,
    text: message
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.sendStatus(200);
    }
  });
});

const PORT = serverConfig.port || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

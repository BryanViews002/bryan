const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Route to handle form submission
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Set up Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "joshuaemma324@gmail.com", // Replace with your email
        pass: "emmanuel12@$npm install", // Replace with your email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: "your-email@gmail.com", // Replace with your email
      subject: `Message from ${name}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

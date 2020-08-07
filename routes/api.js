const express = require("express");
const router = express.Router();

router.get("/api", (req, res) => {
  res.send("Hello World");
});

router.post("/api/mail", (req, res) => {
  let data = req.body;
  res.send(data);

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  let mailOptions = {
    replyTo: `${data.mail}`,
    to: "snoqhamza@yahoo.com",
    subject: `${data.mail}`,
    text: `${data.message}`,
  };

  transporter.sendMail(mailOptions, (error, data) => {
    if (error) {
      console.log("error occured", error);
    } else {
      console.log("email sent");
    }
    smtpTransport.close();
  });
});

module.exports = router;

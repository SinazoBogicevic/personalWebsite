require("dotenv").config();

const nodemailer = require("nodemailer");
const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const path = require("path");

//const routes = require("./routes");

app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//app.use("/", routes);

if (process.env.NODE_ENV === "production") {
  app.use("/static", express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

/*
app.get("/", (req, res) => {
  res.send(req.body);
});*/

app.post("/api/mail", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`server listening at port 3001`);
});

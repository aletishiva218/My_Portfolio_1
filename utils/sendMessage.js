import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config()

const authUser = process.env.AUTH_USER;
const authPass = process.env.AUTH_PASS;

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
  auth: {
    user:authUser, // Your Gmail email address
    pass: authPass   // Your Gmail email password
  }
});

const sendMessage = (username,useremail,body) => {
  const mailOptions = {
    from: authPass, // Your Gmail email address
    to: "shivaaleti400@gmail.com",
    subject: `Portfolio Visitor -${username},${useremail}`,
    text: body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error)
    {
        console.log(error.toString())
    }
  });
}

export default sendMessage;
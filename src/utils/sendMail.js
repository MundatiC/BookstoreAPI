const {createTransport} = require('nodemailer');
require("dotenv").config()

const email_config = require("../config/emailConfig")

const message = {
    to: ["mundati.caleb20@students.dkut.ac.ke"],
    from: process.env.EMAIL_USER ,
    subject:"Email testing || Send from NodeMailer" ,
    text: "It works!" ,
}


const transporter = createTransport(email_config)

async function sendMail(){
    try {
       let result = await transporter.sendMail(message)
       console.log(result)
    } catch (error) {
        console.log(error)
    }
}

module.exports = sendMail




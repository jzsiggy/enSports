const nodemailer = require('nodemailer');
const EMAIL = process.env.EMAIL
const EMAILPASSWORD = process.env.EMAILPASSWORD

const sendMail = async (recipient, subject, message) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL,
        pass: EMAILPASSWORD,
       }
   });

  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: recipient, // list of receivers
    subject: subject, // Subject line
    text: message, // plain text body
  });

  console.log("Message sent: %s", info.messageId);
}

module.exports = {
  sendMail,
};
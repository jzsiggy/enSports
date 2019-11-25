const nodemailer = require('nodemailer');

const sendMail = async (recipient, subject, message) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jzsiggy@gmail.com',
        pass: 'gators77'
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
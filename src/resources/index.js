const { mongooseConnect } = require('./mongooseConnect');
const { sendMail } = require('./sendMail');

module.exports = {
  mongooseConnect,
  sendMail,
};
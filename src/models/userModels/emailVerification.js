const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailVerificationSchema = new Schema({
  userId : {
    type : Schema.Types.ObjectId,
    required : true,
  },
  createdAt: {
    type : Date,
    expires : '15m',
    default : Date.now,
  },
});

const EmailVerification = mongoose.model('EmailVerification', emailVerificationSchema);

module.exports = {
  EmailVerification,
};
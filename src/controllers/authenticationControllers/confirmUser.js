const { EmailVerification , User } = require('../../models')

const confirmUser = (request, response, next) => {
  verificationId = request.params.verificationId;
  EmailVerification.findById(verificationId)
  .then(verifiedDocument => {
    console.log(verifiedDocument);
    User.findOneAndUpdate(
      { _id : verifiedDocument.userId }, 
      {
        $set: { confirmed: true },
      },
      { new : true }
    )
    .then(updatedUser => {
      console.log(updatedUser);
      request.session.user = updatedUser;
      response.redirect('/dashboard');
    });
  })
  .catch(err => {
    response.render('authentication/signup', {
      errorMessage: "We were unnable to confirm your account",
    });
  });
};

module.exports = {
  confirmUser,
};
const renderSignupForm = (request, response, next) => {
  response.render('authentication/signup');
};

module.exports = {
  renderSignupForm,
};
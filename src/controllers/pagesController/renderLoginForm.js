const renderLoginForm = (request, response, next) => {
  response.render('authentication/login');
};

module.exports = {
  renderLoginForm,
};
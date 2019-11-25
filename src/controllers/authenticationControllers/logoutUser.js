const logoutUser = (request, response, next) => {
  request.session.user = null;
  response.redirect('/');
};

module.exports = {
  logoutUser,
};
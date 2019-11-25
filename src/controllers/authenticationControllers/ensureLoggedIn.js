const ensureLoggedIn = (request, response, next) => {
  if (request.session.user) {
    next();
  } else {
    response.redirect('/login');
  };
};

module.exports = {
  ensureLoggedIn,
};

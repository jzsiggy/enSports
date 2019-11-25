const ensureLoggedOut = (request, response, next) => {
  if (!request.session.user) {
    next();
  } else {
    response.redirect('/dashboard');
  };
};

module.exports = {
  ensureLoggedOut,
};
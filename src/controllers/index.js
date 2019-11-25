const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderBoard,
} = require('./pagesController');

const {
  createUser,
  loginUser,
  ensureLoggedIn,
  logoutUser,
  confirmUser,
} = require('./authenticationControllers');

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderBoard,
  createUser,
  loginUser,
  ensureLoggedIn,
  logoutUser,
  confirmUser,
};
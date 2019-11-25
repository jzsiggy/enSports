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
  ensureLoggedOut,
  logoutUser,
  confirmUser,
} = require('./authenticationControllers');

const {
  createNewPost,
} = require('./contentControllers');

module.exports = {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderBoard,
  createUser,
  loginUser,
  ensureLoggedIn,
  ensureLoggedOut,
  logoutUser,
  confirmUser,
  createNewPost,
};
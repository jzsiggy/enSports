const { createUser } = require('./createUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { ensureLoggedIn } = require('./ensureLoggedIn');
const { confirmUser } = require('./confirmUser');
const { ensureLoggedOut } = require('./ensureLoggedOut');

module.exports = {
  createUser,
  loginUser,
  ensureLoggedIn,
  ensureLoggedOut,
  logoutUser,
  confirmUser,
};

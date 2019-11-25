const { createUser } = require('./createUser');
const { loginUser } = require('./loginUser');
const { logoutUser } = require('./logoutUser');
const { ensureLoggedIn } = require('./ensureLoggedIn');
const { confirmUser } = require('./confirmUser');

module.exports = {
  createUser,
  loginUser,
  ensureLoggedIn,
  logoutUser,
  confirmUser,
};

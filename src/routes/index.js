const {
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
} = require('../controllers');

const express = require('express');
const router = express.Router();

router.get("/", ensureLoggedOut, renderHome);
router.get("/login", ensureLoggedOut, renderLoginForm);
router.post("/login", ensureLoggedOut, loginUser);
router.get("/signup", ensureLoggedOut, renderSignupForm);
router.post("/signup", ensureLoggedOut, createUser);
router.get('/logout', logoutUser);
router.get('/dashboard', ensureLoggedIn, renderBoard);
router.get('/confirm/:verificationId', confirmUser);
router.post('/newPost', createNewPost);

router.use((request, response, next) => {
  return response.status(404).send({ message: 'Route: '+request.url+' Not found.' });
});

module.exports = {
  router
};

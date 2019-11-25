const {
  renderHome,
  renderSignupForm,
  renderLoginForm,
  renderBoard,
  createUser,
  loginUser,
  ensureLoggedIn,
  logoutUser,
  confirmUser,
} = require('../controllers');

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log(req.session)
  next()
})

router.get("/", renderHome);
router.get("/login", renderLoginForm);
router.post("/login", loginUser);
router.get("/signup", renderSignupForm);
router.post("/signup", createUser);
router.get('/logout', logoutUser);
router.get('/dashboard', ensureLoggedIn, renderBoard);
router.get('/confirm/:verificationId', confirmUser);

module.exports = {
  router
};

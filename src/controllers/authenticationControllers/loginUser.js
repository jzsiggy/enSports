const { User } = require('../../models');
const bcrypt = require('bcrypt');

const loginUser = (request, response, next) => {
  const user = request.body;
  console.log(user);

  User.findOne({ username : user.username })
  .then(existingUser => {
    console.log(existingUser);
    if (!existingUser) {
      response.render('authentication/login', {
        errorMessage : 'Invalid Username'
      });
    } else {
      if ( bcrypt.compareSync(user.password, existingUser.password) ) {
        request.session.user = existingUser;
        response.redirect('/dashboard');
      } else {
        response.render('authentication/login', {
          errorMessage : 'Invalid Password'
        });
      };
    };
  });
};

module.exports = {
  loginUser,
};
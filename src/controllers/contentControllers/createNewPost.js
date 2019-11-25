const { Post } = require('../../models');

const createNewPost = (request, response, next) => {
  post = request.body;
  Post.create({
    text : post.text,
    posterId : request.session.user._id,
    posterUsername : request.session.user.username
  })
  .then(newPost => {
    response.redirect('/dashboard');
  });
};

module.exports = {
  createNewPost,
};
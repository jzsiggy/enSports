const { Post } = require('../../models');

const renderBoard = (request, response, next) => {
  Post.find({ })
  .then(postList => {
    response.render("dashboard", {
      posts : postList,
    });
  });
};

module.exports = {
  renderBoard,
};
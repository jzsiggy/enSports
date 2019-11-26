const { Post } = require('../../models');

const renderBoard = (request, response, next) => {
  Post.find({ })
  .then(postList => {
    formattedPostList = postList.forEach(post => {
      postDate = post.createdAt;
      post.formattedDate = postDate.getDate() + "-" +
                          (postDate.getMonth() + 1) + "-" + 
                          postDate.getFullYear()+ " " + 
                          postDate.getHours() + ":" + 
                          postDate.getMinutes() + ":" + 
                          postDate.getSeconds() ;
    });
    response.render("dashboard", {
      posts : postList.reverse(),
    });
  });
};

module.exports = {
  renderBoard,
};
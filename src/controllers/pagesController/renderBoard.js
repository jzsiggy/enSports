const renderBoard = (request, response, next) => {
  response.render("dashboard");
};

module.exports = {
  renderBoard,
};
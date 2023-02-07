function rootController(req, res) {
  res.status(200).send('Hello I\'m here!');
}

module.exports = {
  rootController,
};

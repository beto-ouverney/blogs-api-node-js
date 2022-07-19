const PostServices = require('../../services/postServices/PostServices');

async function DeletePostController(req, res) {
  const { id } = req.params;
  const token = req.headers.authorization;
  await PostServices.DeletePostService(token, id);
  res.status(204).send();
}

module.exports = { DeletePostController };
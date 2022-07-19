const PostServices = require('../../services/postServices/PostServices');

async function UpdatePostController(req, res) {
  const { id } = req.params;
  const token = req.headers.authorization;
  const post = req.body;
  const postUpdated = await PostServices.UpdatePostService(post, token, id);
  res.status(200).json(postUpdated);
}

module.exports = { UpdatePostController };
const PostServices = require('../../services/postServices/PostServices');

async function AddPostController(req, res) {
  const token = req.headers.authorization;
  const post = req.body;
  const postAdded = await PostServices.AddPostService(post, token);
  res.status(201).json(postAdded);
}

module.exports = { AddPostController };
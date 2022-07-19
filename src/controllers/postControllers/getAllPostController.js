const PostServices = require('../../services/postServices/PostServices');

async function GetAllPostController(req, res) {
  const posts = await PostServices.GetAllPostService();
  res.status(200).json(posts);
}

module.exports = { GetAllPostController };
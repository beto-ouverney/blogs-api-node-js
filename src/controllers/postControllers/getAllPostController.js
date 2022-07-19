const PostServices = require('../../services/postServices/PostServices');

async function GetAllPostController(req, res) {
  const posts = await PostServices.GetAllPostService();
  return res.status(200).json(posts);
}

module.exports = { GetAllPostController };
const PostServices = require('../../services/postServices/PostServices');

async function GetByIDPostController(req, res) {
  const postID = req.params.id;
  const post = await PostServices.GetByIDPostService(postID);
  res.status(200).json(post);
}

module.exports = { GetByIDPostController };
const PostService = require('../../services/postServices/PostServices');

async function SearchPostController(req, res) {
  const { q: search } = req.query;
  const posts = await PostService.SearchPostService(search);
  return res.status(200).json(posts);
}

module.exports = { SearchPostController };
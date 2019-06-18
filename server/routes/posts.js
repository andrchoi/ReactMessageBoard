var express = require('express');
var router = express.Router();

const samples = [
  {content: "Hello World"},
  {content: "Sup"}
];

const posts = [];

// get list of posts
router.get('/', function(req, res, next) {
  res.json(posts);
});

// GET post details
router.get('/:id', function(req, res, next) {
  res.json(posts[req.params.id])
})

/* GET samples listing. */
router.get('/samples', function(req, res, next) {
  res.json(samples);
  
});

// POST new post
router.post('/', function(req, res, next) {
  posts.splice(posts.length,0,req.body)
  res.send(req.body);
})

// DELETE posts
router.delete('/:id', function(req, res, next) {
  console.log(req.params)
  posts.splice(req.params.id,1);
  res.send(req.params)
})



module.exports = router;
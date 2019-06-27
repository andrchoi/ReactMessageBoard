var express = require('express');
var router = express.Router();
let config = require('../config.js');

const MongoClient = require('mongodb').MongoClient;
const uri = config.uri;
const client = new MongoClient(uri, { useNewUrlParser: true });

let posts = [];
let collection;
let index = 0;

client.connect(err => {
  if (err) throw err;
  collection = client.db("messageBoard").collection("posts");
});

// get list of posts
router.get('/', function(req, res, next) {
  try {
    collection.find().toArray(function (err, result) {
      if (err) throw err;
      posts = result;
      if (posts.length !== 0)
        index = posts[posts.length-1]._id+1;
      res.json(posts);
    })
  }
  catch (err) {
    console.log(err);
  }
});
  
// GET post details
router.get('/:id', function(req, res, next) {
  res.json(posts[req.params.id]);
});

// POST new post
router.post('/', function(req, res, next) {
  try {
    collection.insertOne(
      {
        "_id": index,
        "date": req.body.date,
        "content": req.body.content
      }
    ).then(function () {
      res.send(req.body);
      index++;
    }).catch(function (err) {
      throw err;
    }) 
  }
  catch (err) {
    console.log(err);
  }
});

// DELETE posts
router.delete('/:id', function(req, res, next) {
  try {
    collection.deleteOne({_id: parseInt(req.params.id)}).then(function () {
      res.send(req.params);
    }).catch(function (err) {
      throw err;
    });
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;
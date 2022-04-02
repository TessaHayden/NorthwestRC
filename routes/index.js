var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Northwest Restaurant Consultant Index Page' });
  next();
});

module.exports = router;

var express = require('express');
var router = express.Router({ strict: true, caseSensitive: true });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

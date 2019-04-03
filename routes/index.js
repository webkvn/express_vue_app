var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index.html', { title: 'Express' });
  const html = fs.readFileSync(path.resolve(__dirname, '../views/index.html'), 'utf-8')
  res.send(html)
});

module.exports = router;

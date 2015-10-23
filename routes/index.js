var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { server_url: 'http://52.23.184.31:8080/', number_of_tests_server: 200 });
});

module.exports = router;

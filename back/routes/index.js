var express = require('express');
var router = express.Router();
var User = require('../models/user.json')
/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.json({ title: 'Express' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/mycompany/commute', function(req, res, next) {
  try {
    console.log(req);
    console.log('hi');
    res.json({ User });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('../models/User.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  try {
    res.json({ title: 'Express' });
  } catch (error) {
    console.log(error);
  }
});

router.get('/mycompany/commute/:userId', function(req, res, next) {
  try {
    const comId = req.params.userId;
    console.log(comId);
    res.json({ User });
  } catch (error) {
    console.log(error);
  }
});

router.get('/test/:userId', function(req, res, next) {
  try {
    const comId = req.params.userId;
    let userName = '';
    User.forEach(users => {
      if(users.id == comId){
        userName = users.name;
      }
    });
    res.json({ username : userName });
  } catch (error) {
    console.log(error);
  }
});

router.post('/signup', (req,res)=>{
  const user = new User(req.body);
  user.save((error, saved) =>{
    if(error){
      console.log(error);
    }else{
      console.log(saved);
      res.send(saved)
    }
  });
})

module.exports = router;

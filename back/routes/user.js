var express = require('express');
var bcrypt = require('bcrypt');
var User = require('../models/User');
var router = express.Router();
var jwt = require('jsonwebtoken');
require('dotenv').config();
var YOUR_SECRET_KEY = process.env.SECRET_KEY;

// 회원가입
router.post('/signup', (req,res)=>{
  const user = new User(req.body);
  bcrypt.hash(user.password, 10, (error, hashedPassword)=>{
    if(error){
      console.log(error);
      return res.status(500).json({
        error
      });
    }else{
      const newUser = new User({
        id : user.id,
        password: hashedPassword,
        userName : user.userName,
        age : user.age,
        job : user.job,
        goal : user.goal
      });
      newUser.save((error, saved) =>{
        if(error){
          console.log(error);
          res.status(409).send(error);
        }else{
          console.log(saved);
          res.send(saved)
        }
      });
    }
  })
});

// 로그인
router.post('/login', (req,res)=>{ 

  User.findOne({
    id: req.body.id
  })
  .then(user =>{
    if(!user){
      res.status(401).send('Authentication failed. User not found');
    }else{
      bcrypt.compare(req.body.password, user.password, (error, result)=>{
        if(error){
          res.status(500).send('Internal Server Error');
        }
        if(result) {
          
          // jwt
          var token = jwt.sign(
            //토큰에 들어가는 정보
            {
              user_id : user.id
            },
            //시크릿 키
            YOUR_SECRET_KEY,
            // 그 외 정보들
            {
              expiresIn: '1h'
            }
          );
            
          // cookie
          res.cookie('user', token);
          res.status(201).json({
            result: 'ok',
            token,
            user_id : user.id
          });

        } else {
          res.status(401).json('Authentication failed. Wrong password.');
        }
      })
    }
  })
  
})

//정보수정
router.get('/modify', async (req,res)=>{
  const userId = req.query.id;
  console.log(userId);
  try{
    const user = await User.findOne({
      id : userId
    });
    res.json({
      user
    });
  }catch(err){
    res.status(500).json({message : err.message})
  }
})


module.exports = router;
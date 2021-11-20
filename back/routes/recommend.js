var express = require('express');
var router = express.Router();
var Job = require('../models/Job');

// 추천 직업 정보 불러오기
router.get('/', async (req,res)=>{
    const goal = req.query.goal;
    console.log(goal);
    try{
        console.log(goal);
        const job = await Job.findOne({
            tit : goal
        });
        console.log(job);
        res.json({
            job
        });
    }catch(err){
        res.status(500).json({message : err.message})
    }
})

module.exports = router;
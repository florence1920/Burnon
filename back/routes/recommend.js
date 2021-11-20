var express = require('express');
var router = express.Router();

// 추천 직업 정보 불러오기
router.get('/', async (req,res)=>{
    const userId = req.query.id;
    console.log(userId);
    // try{
    //     const user = await User.findOne({
    //         id : userId
    //     });
    //     res.json({
    //         user
    //     });
    // }catch(err){
    //     res.status(500).json({message : err.message})
    // }
})

module.exports = router;
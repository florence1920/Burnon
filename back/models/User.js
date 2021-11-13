var mongoose = require('mongoose');

//스키마 생성
const UserSchema = mongoose.Schema({
    id:{
        type: String,
        trim: true,
        unique:1
    },
    password:{
        type: String,
    },
    userName:{
        type: String,
        maxlength:50
    },
    age:{
        type: Number,
        maxlength:50
    },
    goal:{
        type: String
    },
    job :{
        type: String
    }
})

//모델로 감싸주기 ! 이름 지정해주고 스키마 넣어주고
const User = mongoose.model('User', UserSchema);

module.exports = User;
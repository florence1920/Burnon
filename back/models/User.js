var mongoose = require('mongoose');

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

const User = mongoose.model('User', UserSchema);

module.exports = User;
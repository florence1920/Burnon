var mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    tit:{
        type: String,
        trim: true,
        unique:1
    },
    ls: {
        tit:{
            type: String,
            trim: true,
            unique:1
        },
        step:{
            type: Number
        },
        minAge:{
            type: Number
        },
        maxAge:{
            type: Number
        },
        todo:[
            {
                category:{
                    type: String,
                    trim: true
                },
                tit:{
                    type: String,
                    trim: true
                },
                major:{
                    type: String,
                    trim: true
                }
            }
        ]
    }
})

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
const mongoose = require("mongoose");

module.exports.users = mongoose.model("user", new mongoose.Schema({
    name : String,
    regno  : String,
    phno       : String,
    email  : String,
    gender:String,
    block:String,
    gender:String,
    technical : {
        type: Boolean,
        default: false
    },
    design : {
        type: Boolean,
        default: false
    },
    management : {
        type: Boolean,
        default: false
    },
    content_writing:{
        type:Boolean,
        default: true
    },

    test: {
        type:[{
            question: String,
            answer: String
        }],
        default: []
    }
}))


module.exports.questions = mongoose.model("question", new mongoose.Schema({
    question:String,
    domain:String,
    difficulty:Number
}))
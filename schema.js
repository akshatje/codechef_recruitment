const mongoose = require("mongoose");

module.exports.users = mongoose.model("user", new mongoose.Schema({
    name : String,
    regno  : String,
    phno       : String,
    email  : String,
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
    sub_design:{
        uiux : {
            type: Boolean,
            default: false
        },
        graphic : {
            type: Boolean,
            default: false
        },
        video : {
            type: Boolean,
            default: false
        }
    },
    
    sub_technical:{
        machinelearning : {
            type: Boolean,
            default: false
        },
        frontend : {
            type: Boolean,
            default: false
        },
        backend : {
            type: Boolean,
            default: false
        },
        python : {
            type: Boolean,
            default: false
        },
        android: {
            type: Boolean,
            default: false
        },
        coding : {
            type: Boolean,
            default: false
        },
        others: String
    },
    

    test: {
        type:[{
            question: String,
            answer: String
        }],
        default: []
    }
}))
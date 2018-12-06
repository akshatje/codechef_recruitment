const router = require("express").Router();
const {
    questions,
    users
} = require("../schema");


router.get("/getQuestions",(req,res,next)=>{
    if(!req.session.user)
        return next(new Error("Session expired"));
    
        questions.find({domain:req.session.user.domain})
        .limit(20)
        .sort("difficulty")
        .exec((err, qs)=>{
            if(err)
                return next(err);
            res.json(qs);
        }).catch(next);
    
});




router.post("/answers",(req,res,next)=>{
    if(!req.session.user)
        return next(new Error("Session expired"));

    users.findOneAndUpdate({regno:req.session.user.regno},{
        $push:{
            test:{
                question:req.body.question,
                answer:req.body.answer
            }
        }
    }).then(()=>{
        return res.send("Done");
    }).catch(next);
});





router.get("/timerAcknowledge",(req,res,next)=>{
    if(!req.session.user)
        return next(new Error("Session expired"));

    setTimeout(()=>{
        req.session.user=null;
        return res.send("Quiz over")
    },2000);
});


module.exports = router;

/**
 * 
 * 1. User enters details
 * 2. They get saved in DB and session gets created
 * 3. User presses start quiz
 * 4. Fetches questions and gives a GET request to timer acknowledge
 * 5. Once timer is up frontend flushes all answeres to the answer POST route
 * 6. Timer in the backend sends some data back
 * 7. Update all the current data with the data that is received from the timerAcknowledge
 */
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
                next(err);
            res.json(qs);
        });
    
});




router.post("/answers",(req,res,next)=>{
    if(!req.session.user)
        return res.redirect("/");

    users.findOne({regno:req.session.user})
    .then((u)=>{
        if(!u)
            return res.json({message:"User does not exist"})

        if(u.test.length > 0)
            return res.json({message:"User has already responded"})
        users.findOneAndUpdate({regno:req.session.user},{
            technical:req.body.technical,
            design:req.body.design,
            management:req.body.management,
            content_writing:req.body.content_writing,
            $push: {test: {$each: req.body.answers}}
        }).then(()=>{
            return res.send("Done");
        }).catch(next);
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
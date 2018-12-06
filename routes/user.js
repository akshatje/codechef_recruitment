const router = require("express").Router()
const users = require("../schema").users;

router.post("/record", (req,res,next)=>{
    
    if(!req.body.name || !req.body.regno || !req.body.email || 
        !req.body.phno)
        return res.json({message:"No fields should be empty"});

    if(!req.body.regno.match(/^1[5-9]...[0-9][0-9][0-9][0-9]$/))
        return res.json({message:"Registration number invalid format"});
    if(!req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
        return res.json({message:"Email address invalid format"});
    if(!req.body.name.match(/[a-zA-Z ]*/))
        return res.json({message:"Name invalid format"});
    if(!req.body.phno.match(/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/))
        return res.json({message:"Phone number invalid format"});
    

    users.create(req.body)
    .then((ud)=>{
        res.json(ud);
    })
    .catch(next);

});


module.exports = router;
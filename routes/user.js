const router = require("express").Router()
const users = require("../schema").users;

router.post("/record", (req,res,next)=>{
    
    // if(!req.body.name || !req.body.regno || !req.body.email || 
    //     !req.body.phno)
    //     return res.json({message:"No fields should be empty"});

    // if(!req.body.regno.match(/^1[5-9]...[0-9][0-9][0-9][0-9]$/))
    //     return res.json({message:"Registration number invalid format"});
    // if(!req.body.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/))
    //     return res.json({message:"Email address invalid format"});
    // if(!req.body.name.match(/[a-zA-Z ]*/))
    //     return res.json({message:"Name invalid format"});
    // if(!req.body.phno.match(/^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/))
    //     return res.json({message:"Phone number invalid format"});
    
    // let domain='';
    // if(req.body.management)
    //     domain="management";
    // else if(req.body.technical)
    //     domain="technical";
    // else if(req.body.design)
    //     domain="design";
    // else if(req.body.content_writing)
    //     domain="content_writing";

        
    users.findOne({regno:req.body.regno})
    .then((u)=>{
        if(true/*correct this*/ ){
            users.create(req.body)
            .then((ud)=>{
                req.session.user=ud.regno
                console.log(req.session.user)

                res.render("domain");
            })
            .catch(next);
        }
        else
            res.json({message:"User already exists"})
    }).catch(next);

});

router.get("/quiz",(req,res,next)=>{
    if(!req.session.user)
        return res.redirect("/");
    res.render("index");
})


module.exports = router;
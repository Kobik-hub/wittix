const express = require("express");
const router = express.Router();
const User = require('../models/usersModel');


router.get('/', async (req,res)=>{

     const numberOfQueries = Object.keys(req.query).length;
     if(numberOfQueries === 0){
        const users = await User.find({});
         res.send(users);
     }
    else if(numberOfQueries > 1) return res.send({});
    const users = await User.find(req.query);
    return res.send(users);
});

router.delete('/', async(req,res)=>{
    try{
        console.log(req.body);
    const {username} = req.body;
    const deletedUser = await User.deleteOne({username : username});
    return res.send(deletedUser);
    }catch(e){
        return res.status(404).send(e.message);
    }
})

module.exports = router;
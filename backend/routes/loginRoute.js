const express = require("express");
const router = express.Router();
const User = require('../models/usersModel');

router.post('/', async (req,res)=>{
    try{ 
    
    const {username,password} = req.body;
    const user = await User.findOne({ username});
    if (user) {
          return res.send(user);
    } 
    else {
        return res.status(400).send("invalid email or password");
      }}
       catch (error) {
        return res.status(400).send(error);
      }
    
});

module.exports = router;
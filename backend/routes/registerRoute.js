const express = require("express");
const generator = require('generate-password');
const UsernameGenerator = require('username-generator');
const router = express.Router();
const User = require('../models/usersModel');


router.post('/', async (req,res)=>{

    try {
        console.log(req.body);
        const { first_name, last_name } = req.body;
        const username = UsernameGenerator.generateUsername();
        const password = generator.generate({
            length: 10,
            numbers: true
        });
        const user = await User.create({
            username,
            password,
            first_name,
            last_name
        }); 
        res.send(user);
      } catch (e) {
        return res.status(404).json(e.message);
      }
});

module.exports = router;
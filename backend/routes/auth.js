const express = require('express');
const User = require('../models/User');
const router = express.Router(); //router in index.js called here
const { body, validationResult } = require('express-validator');  // package used to valiadte the name , email ia entered collectly or not
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


const JWT_SECRET ='shayanisagoodboy';

// ROUTE 1 creating a user using : POST "/api/auth/createuser"  no loogin required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),  //validation for name used here
    body('email', 'Enter a valid email').isEmail(),           //validation for email used here
    body('password','password must be atleast 5 character').isLength({ min: 5 }) //validation for email used here
],  async (req, res) => {
  
  //in there are errors ,return error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    try{
      //chech whether  the user with this email exists already

    
     let user = await User.findOne({email: req.body.email});
     if (user) { 
      return res.status(400).json({error: "sorry a user with this is already exists"})
     }

      const salt = await bcrypt.genSalt(10);
      const secPass =  await bcrypt.hash(req.body.password, salt);

     //create a new user
      user = User.create({        
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data ={
        user:{
          id:user.id
        }

      }
      const authtoken = jwt.sign(data, JWT_SECRET);

      
    // res.json(User) // erroe fix it later
    res.json({authtoken})

    } catch (error){
      console.error(error.message);
      res.status(500).send("some error occured");
    }
} )






// ROUTE 2     authenticate a user using : POST "/api/auth/login"   
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),    //authenticate  email   here
  body('password','Password cannot be blank').exists(),    //authenticate  password   here
],  async (req, res) => {
   let success = false;
  
//if there are errors ,return error
const errors = validationResult(req);
if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}

const{email, password }=req.body;
try{ 
  let user= await User.findOne({email});
  if(!user){
    success = true
    return res.status(400).json({error:"please try to login with correct credentials"});
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      success = false
      return res.status(400).json({ success , error:"please try to login with correct credentials"});

    }
    const data ={
      user:{
        id:user.id
      }

    }
     const authtoken = jwt.sign(data, JWT_SECRET);
     success = true
     res.json({success , authtoken})
} catch (error){
  console.error(error.message);
  res.status(500).send("internal server error");

}

})
module.exports = router
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({ //schema is formed here 
    name:{
        type:String,
        required:true    //must enters a name
    },

    email:{
        type:String,
        required:true,      //must enters a email
        unique:true          //email must be unique
    },
    password:{
        type:String,
        required:true       //must enters a password
    },
    date:{
        type: Date,
        deafult: Date.now   //take deafault condition date
    },

  });
  const User=  mongoose.model('user', UserSchema);    //here  schema exported with name used in file
  module.exports = User;
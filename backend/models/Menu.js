const mongoose = require('mongoose');
const { Schema } = mongoose;

const MenuSchema = new Schema({ //schema is formed here 
    name:{
        type:String,
        required:true     
    },

    image:{
        type:String,
        required:true,                   
    },
    price:{
        type:Number,
        required:true        
    },
    size:{
        type: String,
        required:true     
    },

  });
  const Menu=  mongoose.model('menu', MenuSchema);    
  module.exports = Menu;
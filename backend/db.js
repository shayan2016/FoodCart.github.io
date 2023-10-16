// here ye connect our mongo to database
const mongoose= require ('mongoose')
const mongoURI = "mongodb://localhost:27017/foodcart"

const connectToMongo =()=>{
   
    mongoose.connect(mongoURI, ()=>{
//if connected then sucesfull print 
        console.log("connected to mongo successfully");
 
    })
 
}

module.exports=connectToMongo;
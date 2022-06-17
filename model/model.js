const mongoose =require("mongoose")
const Model=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})
const mode= mongoose.model("mango",Model)
module.exports=mode;

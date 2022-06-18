const mode=require("../model/model")
const {pass,jwtgen}=require("../util/utils")
// const {pass} =require("../util/utils")
const data=(req,res)=>{
console.log(req.body.name)
const user=new mode(req.body.name)
user.save().then(()=>console.log("data posted"))
.catch((err)=>console.log(err))
}
const login=(req,res)=>{
var entered=req.body.name
 console.log(entered)
mode.findOne({name:entered.name})
.then(result=>
    pass(entered.password,result.password)
.then((all)=>{
    console.log(all)
        if(true){
            // console.log(result);
            // console.log(all)
         jwtgen({name:result.email})
         .then(token=>{
console.log("token",token)
    res.json({
        login:"login success",
        message:"password true",
        token:token
        
    })
})            
        }else{
            console.log("err")
            res.send("err")}
    
}
).catch((err)=>console.log(err))
)}
module.exports={
data,
login
}
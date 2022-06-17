const mode=require("../model/model")
const {pass,jwtgen}=require("../util/utils")
// const {pass} =require("../util/utils")
const data=(req,res)=>{
console.log(req.body)
const user=new mode(req.body)
user.save().then(()=>console.log("data posted"))
.catch((err)=>console.log(err))
}
const login=(req,res)=>{

// pass(10,10)
 console.log(req.body)
mode.findOne({name:req.body.name})
.then(result=>
    pass(req.body.password,result.password)
.then((all)=>{
        if(all){
            // console.log(result);
            // console.log(all)
         jwtgen({name:result.name})
         .then(token=>{

    res.json({
        login:"login success",
        message:"password true",
        token:token
        
    })
})            
        }else{res.send("err")}
    
}
).catch((err)=>console.log(err))
)}
module.exports={
data,
login
}
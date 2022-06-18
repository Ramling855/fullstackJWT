const key="secret";
const jwt=require("jsonwebtoken");

const allowAcces=(req,res,next)=>{
    const token=req.headers.token;
    console.log(token)
    if(token){
        jwt.verify(token,key,(err,decoded)=>{
if(err){console.log(err)
    res.json({
    message:"token not valid"
})}else{
    next()
// res.json({
//     token:"success jwt token"
// })
    
}
        })

    }else{
        res.json({
            message:"restrict access"
        })
        
    }

}
module.exports={
    allowAcces
}
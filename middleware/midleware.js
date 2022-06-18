const bcrypt = require('bcrypt');
const encryptPassword=async(req,res,next)=>{
    console.log(req.body.name.bcryptpassword)
    try{
const hash=await bcrypt.hash(req.body.name.password,10)
req.body.password=hash;
console.log(hash)
next()
    }
catch(err){
console.log(err)
}

}
module.exports={
    encryptPassword
}
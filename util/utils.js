const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken')
const key="secret"
const pass=async(dbpassord,enteredpassword)=>{
    
try{
return await bcrypt.compare(dbpassord,enteredpassword)
}
catch(err){
return false;
}
}
// const jwtgen=(data)=>{

// }

const jwtgen=async(userdata)=>{
try {
    const token=await jwt.sign(userdata,key)
    return token;
} catch (error) {
    console.log(error)
    return false;
}

}

module.exports={pass,
    jwtgen}
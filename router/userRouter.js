const express=require("express")
const{data,login}=require("../controller/userController")
const{encryptPassword}=require("../middleware/midleware")
const{allowAcces}=require("../middleware/verifyMidllware")
const userRouter=express.Router()
const app=express()
const cors=require("cors")
app.use(cors());
userRouter.post("/signup",encryptPassword,data)

userRouter.post("/login",login)

module.exports=userRouter;

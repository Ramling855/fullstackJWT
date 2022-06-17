const express=require("express")
const{data,login}=require("../controller/userController")
const{encryptPassword}=require("../middleware/midleware")
const{allowAcces}=require("../middleware/verifyMidllware")
const userRouter=express.Router()

userRouter.post("/signup",encryptPassword,data)

userRouter.post("/verify",allowAcces,login)

module.exports=userRouter;

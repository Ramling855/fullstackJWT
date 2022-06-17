const express =require("express")
const userRouter=require("./router/userRouter")
const crudRouter=require("./router/loggedcrud")
const app=express();
const cors=require("cors")
app.use(cors());
app.use(express.json())

app.use("/",userRouter)
app.use("/crud",crudRouter)
module.exports=app
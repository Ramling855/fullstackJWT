const express =require("express")
const userRouter=require("./router/userRouter")
const crudRouter=require("./router/loggedcrud")
const fileuploadRouter=require("./router/fileuploadRouter")
const app=express();
const cors=require("cors")
app.use(cors());
app.use(express.json())
app.use(express.static("./router/uploads"))


app.use("/data",userRouter)
app.use("/crud",crudRouter)
app.use("/file",fileuploadRouter)
module.exports=app
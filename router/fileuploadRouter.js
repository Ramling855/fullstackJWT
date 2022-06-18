const express=require("express")
const fileuploadRouter=express.Router();
const file=require("../controller/fileconstrol")
const path=require("path")
const multipart =require("connect-multiparty")
// var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: path.join(__dirname,"data") });

// var multipartymiddleware = multipart({ uploadDir: path.join(__dirname,"./data") });


fileuploadRouter.post("/upload",multipartMiddleware,(req,res)=>{
    console.log(multipartMiddleware);
    console.log(__dirname)
    res.send("file added")

})


module.exports=fileuploadRouter;
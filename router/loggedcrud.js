const express =require("express")
const{getdata,postdata,deletedata,updatedata}=require("../controller/loggeduser")
const {allowAcces}=require("../middleware/verifyMidllware")
const crudRouter=express.Router();
crudRouter.get("/getall",allowAcces,getdata)
crudRouter.post("/postall",postdata)
crudRouter.delete("/deleteall/:id",deletedata)
crudRouter.put("/updateall/:id",updatedata)

module.exports=crudRouter;

const express =require("express")
const{getdata,postdata,deletedata,updatedata}=require("../controller/loggeduser")
const crudRouter=express.Router();
crudRouter.get("/getall",getdata)
crudRouter.post("/postall",postdata)
crudRouter.delete("/deleteall/:id",deletedata)
crudRouter.put("/updateall/:id",updatedata)

module.exports=crudRouter;

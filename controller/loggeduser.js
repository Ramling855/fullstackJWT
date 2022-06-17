const { response } = require("../app")
const mode=require("../model/model")
const getdata=async(req,res)=>{
 const all=await mode.find({})
    // .then(data=>res.json({message:"data"})).catch(err=>console.log(err))
// console.log(all)
// res.json({
//     message:"done"
// })
res.send(all)
}
const postdata=(req,res)=>{
    const newcreate=new mode(req.body)
    newcreate.save().then(()=>console.log("data inserted")).catch(()=>console.log("errr"))

}
const deletedata=(req,res)=>{
    console.log(req.params.id)
    mode.findByIdAndDelete({_id:req.params.id}).then(()=>console.log("data deleted")).catch(()=>console.log("errr delete"))
}
const updatedata=(req,res)=>{
    var data=req.body
    console.log(data)
    mode.updateOne({name:req.body.name},{$set:{name:data.name,email:data.email}})
    .then(()=>console.log("updated")).catch(()=>console.log("update err"))
}
module.exports={getdata,postdata,deletedata,updatedata}
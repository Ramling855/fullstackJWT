const { response } = require("../app")
const mode=require("../model/model")
const getdata=(req,res)=>{
//   const all=  mode.find()
//     res.send(all)
//     try{

//         const all=await mode.find({})
//         console.log(all)
// res.json({all})
//     }catch(err){console.log(err)}
 mode.find()
    .then(data=>res.json({data:data})).catch(err=>console.log(err))


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
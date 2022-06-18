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
//  mode.find({},{},{skip:0,limit:5})
mode.find().skip(1).limit(10).sort({name:-1})
    .then(data=>res.json({data:data})).catch(err=>console.log(err))


}
const postdata=(req,res)=>{
    console.log(req.body.name)
    const newcreate=new mode(req.body.name)
    newcreate.save().then(()=>console.log("data inserted")).catch((e)=>console.log("errr",e))

}
const deletedata=(req,res)=>{
    console.log(req.params.id)
    mode.findByIdAndDelete({_id:req.params.id}).then(()=>console.log("data deleted")).catch(()=>console.log("errr delete"))
}
const updatedata=(req,res)=>{
    var data=req.body.values
    console.log(data)
    mode.findByIdAndUpdate({_id:req.params.id},{$set:{name:data.name,email:data.email}})
    .then(()=>console.log("updated")).catch(()=>console.log("update err"))
}
module.exports={getdata,postdata,deletedata,updatedata}
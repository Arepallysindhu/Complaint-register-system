const express = require("express")
const router = express.Router();
const CompliantModel = require("../models/compliant")
const mongoose = require("mongoose")

router.post("/create", async function(req,res){
    let isCompliantExist = await CompliantModel.findOne({description:req.body.description})
    if (isCompliantExist) {
        return res.send({ message:"This Complaint has already registered ",success:false})
    }else{
        let newCompliant = new CompliantModel({...req.body});
        let createdCompliant = await newCompliant.save()
        return res.send({ message:"Successfully Registered",success:true})
    }
    
})

router.get("/list/:userId",async function(req,res){
    //let userId = req.params.userId
    let compliants = await CompliantModel.find({})
    return res.send({compliants,success:true})

})


module.exports = router
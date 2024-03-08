const mongoose = require("mongoose")


const compliantSchema = new mongoose.Schema({
    Name:String,
    email:String,
    phone:String,
    description:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Auth'

    }
    
})



module.exports = mongoose.model("compliants",compliantSchema)
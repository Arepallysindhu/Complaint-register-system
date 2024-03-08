const mongoose = require("mongoose")

const authSchema = new mongoose.Schema({
    Name:String,
    email:String,
    password:String,
    phone:String,
    role:String
})


module.exports= mongoose.model("auth",authSchema)
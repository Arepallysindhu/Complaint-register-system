const express = require ("express");
const app = express();
const cors = require ("cors")
const mongoose = require ("mongoose")

const authRoutes = require("./routes/auth")
const compliantRoutes = require("./routes/compliant")


mongoose.connect("mongodb://127.0.0.1/crs")

app.use(cors())
app.use(express.json())


app.use("/auth",authRoutes)
app.use("/compliant",compliantRoutes)

app.listen(5000,function(){
    console.log("server is running at 5000")
})
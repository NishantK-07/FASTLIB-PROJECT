const express = require("express")
const router= require("./routes/main.js")
const db =require("../db/connectdb.js")
const createdoc = require("../src/models/student.js")
const studentmodel = require("../src/models/student.js")
const jwt = require("jsonwebtoken")
// const bodyParser = require("body-parser")


//handlers
const path = require("path")
const hbs = require("hbs")
const cookieParser = require("cookie-parser")



const statpath =path.join(__dirname,"../public")
const temppath =path.join(__dirname,"../template/views")




const app=express()

//data get to json
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

//connect database
db()

//template engine
app.set("view engine","hbs")
app.set("views",temppath)
hbs.registerPartials("../template/partials")

//static folder serve
app.use("/static",express.static(statpath))

//use router

app.use("",router)

// createdoc()

// app.get("/index",async(req,res)=>{
//     res.render("index")
// })

// const createtoken = async()=>{
//     const token = await jwt.sign({_id: "647623038f81939a4e8df954"},"mynameisfastlibwebsite.com")
//     console.log(token)
// }
// createtoken()
app.listen(process.env.PORT | 8000,()=>{
    console.log("server listening")
})
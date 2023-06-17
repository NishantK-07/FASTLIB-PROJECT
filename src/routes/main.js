const express= require("express")
const router = express.Router()
const createdoc = require("../models/student.js")
const studentmodel = require("../models/student.js")
const jwt= require("jsonwebtoken")
const auth = require("/Users/HP/fastlib/middleware/auth.js")

router.get("/",async(req,res)=>{
    res.render("index")
})




router.post("/index",async(req,res)=>{
    try {
        const email= req.body.email
        const password=req.body.psw
        console.log("here")
        const stdemail = await studentmodel.findOne({shardaemail:email})
        console.log("here")
        console.log(stdemail)
        const token = await stdemail.generatetoken()
        console.log("upar")
        console.log(token)
        // const ismatch= await bcrypt.compare(password,stdemail.systemid)
        console.log("here")
res.cookie("jwt",token,{
    httpOnly:true
})

// console.log(req.cookies.jwt)

        if(password==stdemail.systemid){
            res.status(201).render("home")
        }
        else{
            res.send("password not match")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send("invalid email")
    }
})
router.get("/home",async(req,res)=>{
    
    res.render("home")
})
router.get("/profile",auth,async(req,res)=>{
    const token = req.cookies.jwt
        const verifyuser = jwt.verify(token,"mynameisfastlibwebsite")
        const bookname= req.body.bookname
        const isbnno= req.body.isbnno
        
        // console.log(verifyuser)
        const users = await studentmodel.findOne({_id:verifyuser._id})
        
    res.render("profile",{
        users:users,
        bookname:bookname,
        isbnno:isbnno
    })
})

router.post("/profile",async(req,res)=>{
    const bookname= req.body.name
    const isbnno= req.body.isbnno
    
    
})
router.get("/resources",async(req,res)=>{
    
    res.render("resources")
})

router.get("/support",async(req,res)=>{
    res.render("support")
})
router.get("/payment",async(req,res)=>{
    res.render("payment")
})




module.exports=router
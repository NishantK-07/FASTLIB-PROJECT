const mongoose = require('mongoose')
const studentinfo= require("../src/models/student.js")
const conndb = ()=>{
    return mongoose.connect("mongodb://127.0.0.1:27017/fastlib").then(()=>{
        console.log("connected succesfully")



    }).catch((err)=>{
        console.log(err)
    })
}

module.exports= conndb
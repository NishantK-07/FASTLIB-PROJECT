const mongoose =require("mongoose")
const jwt= require("jsonwebtoken")
const STUDENT = new mongoose.Schema({
    name:{
        type:String,
    },
    school:{
        type:String,
    },
    department:{
        type:String,
    },
    course:{
        type:String,
    },
    section:{
        type:String,
    },
    systemid:{
        type:Number,
        unique:true,
        required:true
    },
    shardaemail:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    tokens:[{
        token:{
           type:String,
           required:true,
        }
       }]

})

//tokens
STUDENT.methods.generatetoken = async function(){
    try {
        const token=  jwt.sign({_id:this._id},"mynameisfastlibwebsite")
        this.tokens=this.tokens.concat({token:token})
        await this.save()

        return token  // return token if undefined
    } catch (error) {
        res.send("the error part" + error)
      console.log("the error part " + error)
    }
}
 const studentmodel= mongoose.model('student',STUDENT)

// const createdoc = async()=>{
//     try {
//         console.log("here")
        // const stdoc1 = new studentmodel({
            
        //         name:"rahul",
        //         school:"SET",
        //         department:"BTECH",
        //         course:"CSE",
        //         section:"A",
        //         systemid:202294,
        //         shardaemail:"202294.rahul@ug.sharda.ac.in",
        //         phone:1297540,
               
        // })

        // const result =  stdoc1.save()
        // console.log(result)
//     } catch (error) {
//         console.log(error)
//     }
// }


module.exports = (studentmodel)
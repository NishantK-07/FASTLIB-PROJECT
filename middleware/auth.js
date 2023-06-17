const jwt = require("jsonwebtoken")
const studentmodel = require("../src/models/student.js")

const auth = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt
        const verifyuser = jwt.verify(token,"mynameisfastlibwebsite")
        // console.log(verifyuser)
        const user = await studentmodel.findOne({_id:verifyuser._id})
        // console.log(user)
        next()

    } catch (error) {
        res.status(400).send(error)
    }
}
module.exports = (auth)
const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    lName:{type:"string",required:"true"},
    fName:{type:"string",required:"true"},
    email:{type:"string",required:"true"},
    password:{type:"string",required:"true"},
    image:{type:"string"}
})

const User = mongoose.model('User',userSchema)
module.exports=User
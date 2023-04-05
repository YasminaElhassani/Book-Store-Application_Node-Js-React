const User=require("../models/User")
const bcrypt=require("bcrypt")

const createUser =async(U)=>{
    //bcrypt: pour hashage de mot de passe
    const salt = await bcrypt.genSalt()
    U.password = await bcrypt.hash(U.password,salt)
    return await User.create(U)
}
const getAllUsers = async()=>{
    return await User.find()
}

module.exports={createUser, getAllUsers}
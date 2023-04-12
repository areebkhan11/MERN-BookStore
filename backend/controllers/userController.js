const User = require('../models/User')
const jwt = require('jsonwebtoken')


const createToken = (_id) =>{
    jwt.sign({_id}, process.env.SECRET)
}

const loginUser = async (req, res) =>{
    console.log(req.body, "<---body")
    
    
}

const signupUser = async (req, res) =>{
    console.log(req.body, "<---asd")
    const {email, password} = req.body
    try{
        const user = await User.signup(email, password);
        res.status(200).json({email,user})
    }catch(error){
        res.status(400).json({error: error.message})

    }
}

module.exports = {
    signupUser,
    loginUser

}
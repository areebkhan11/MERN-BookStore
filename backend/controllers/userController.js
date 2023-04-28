const User = require('../models/User')
const jwt = require('jsonwebtoken')


const createToken = (obj) =>{
   return jwt.sign(obj, process.env.SECRET, {expiresIn:'3d'})
}

const loginUser = async (req, res) =>{
    const {email, password} = req.body
    
    try{
        if(email == process.env.USER && password == process.env.PASSWORD){
            const user = await User.login(email, password);
            //create token
            const token = createToken({_id:user._id,role:user.role})
            res.status(200).json({email, token})
        }else{
            
            const user = await User.login(email, password);
            //create token
            const token = createToken({_id:user._id,role:user.role})
            res.status(200).json({email, token})
        }
    }catch(error){
        res.status(400).json({error: error.message})
    }
  
}

const signupUser = async (req, res) => {
    const {email, password} = req.body

    try{
        if(email == process.env.USER && password == process.env.PASSWORD){
        const user = await User.signup(email, password);
        //create token
        const token = createToken({_id:user._id,role:user.role})
        res.status(200).json({email, token})
        }else{
            const user = await User.signup(email, password);
            //create token
            const token = createToken({_id:user._id,role:user.role})
            res.status(200).json({email, token})
            
        }

    }catch(error){
        res.status(400).json({error: error.message})

    }
}

module.exports = {
    signupUser,
    loginUser
}
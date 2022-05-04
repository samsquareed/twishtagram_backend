import bcrypt from 'bcryptjs'
import User from "../models/User.js"

//signin controller
export const SignIn = async (req,res) =>{
    try {
        const {email, password} = req.body
        const findUser = await User.findOne({email})
        !findUser && res.status(404).json({message : "user not found"})
        const checkPassword = await bcrypt.compare(password, findUser.password);
        !checkPassword && res.status(400).json({message : "Invalid credentials"})
        res.status(200).json(findUser)
    } catch (error) {
        res.status(500).json({error})
    }
}


//signup controller
export const signUp = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;
        const userExist = await User.findOne({email})
        if(userExist)
            res.status(400).json({message : "User Exist"})
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({email, password : hashedPassword, firstName, lastName})
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({error})
    }
}
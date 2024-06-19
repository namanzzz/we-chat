import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res)=>{
    try {
        const { fullName,username,password,confirmPassword,gender } = req.body;
        if(password!==confirmPassword){
            return res.status(400).json({error: 'Passwords do not match!'})

        }
        const user = await User.findOne({username})
        if(user){
            return res.status(400).json({error: 'username already exists'})
        }

        // hash password here
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);


        // profile pictures
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
        })

        if(newUser){

               generateTokenAndSetCookie(newUser._id, res);
               await newUser.save()
                res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            })

        }
        else{
            res.status(400).json({error: 'Invalid user Data'})
        }


    } catch (error) {
        console.log('error in signup controller')
        res.status(500).json({error: 'Internal server error'})
    }
}

export const login = (req, res) => { 
    console.log('loginUser')
}

export const logout = (req, res) => {
    console.log('logoutUser');
}

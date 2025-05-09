import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Auth from "../models/auth.js";


//SINGUP
export const signup = async(req ,res) =>{
    const { email, password} = req.body;

    try{
        const existingUser = await Auth.findOne({email});
        if (existingUser){
            return res.status(400).json({message: "User already exist !! :)"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Auth({ email, password: hashedPassword });
        await newUser.save();
        console.log({email, password: hashedPassword})
        res.status(201).json({ message: "Signup successful!" });
    }
    catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server Error" });
      }
};

//LOGIN

export const login = async (req, res) =>{
    const {email, password} = req.body

    try{
        const user = await Auth.findOne({email})
        if(!user){
            return res.status(404).json({message: "User not found"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Incorrect Password"})
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
          res.status(200).json({
            message: "Login successful!",
            token,
            user: { id: user._id, email: user.email },
          });
    }
    catch(error){
        console.error("Login Error:", error);
        res.status(500).json({ message: "Server Error" });
    }
};   
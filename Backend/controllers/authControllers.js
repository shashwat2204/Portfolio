// import Auth from "../models/Auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Auth from "../models/auth";


//SINGUP
export const signup = async(req ,res) =>{
    const { email, password} = res.body;

    try{
        const existingUser = await Auth.findOne({email});
        if (existingUser){
            response= res.status(400).json({message: "User already exist !! :)"});
            return response;
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new Auth({ email, password: hashedPassword });
        await newUser.save();
        
        res.status(201).json({ message: "Signup successful!" });
    }
    catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Server Error" });
      }
};

//LOGIN

export const login = async (req, res) =>{
    const {email, password} = res.body

    try{
        const user = await Auth.findOne({email})
        if(!user){
            response = res.status(404).json({message: "User not found"})
        }

        const password = await bcrypt.compare(password, user.password);
        if(!password){
            return res.status(400).json({message: "Incorrect Password"})
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
          );
    }
    
}
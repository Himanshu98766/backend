import { User } from "../models/model.js";
import bcrypt from "bcrypt";
import { Contact } from "../models/contact.model.js";

export const home = async (req, res) => {
    try {
        return await res.send("Hello");
    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }
}


export const getRegister = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ msg: "email exits" })
        }


        const userCreated = await User.create({ username, email, phone, password })

        res.status(201).json(
            {
                msg: "Registration Successfull",
                token: await userCreated.generateToken(),
                userId: userCreated._id.toString(),
            });

    } catch (error) {
        res.status(400).send({ msg: "page not found" })
    }
}

export const getLogIn = async (req, res,next) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        // console.log(userExist);
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        
        const userPassword = await userExist.comparePassword(password);
        if (userPassword) {
            return res.status(200).json(
                {
                    msg: "Login Successfull",
                    token: await userExist.generateToken(),
                    userId: userExist._id.toString(),
                });
        } else {
            return res.status(401).json({ message: "Invalid email or password" })
        }
    } catch (error) {
        // res.status(400).send({ msg: "page not found" });
        next(error);
    }
}

export const contact = async (req, res) => {
    try {
        const response = req.body;
        await Contact.create(response);
        return res.status(200).json({message: "Message send successfully"});
    } catch (error) {
      return res.status(400).send({ msg: "page not found" })
    }
}

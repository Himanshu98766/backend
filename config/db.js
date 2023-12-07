import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
     console.log("Connection Successfull :)");
    } catch (error) {
        console.error("Database connection fail", error);
    }
}

//mongodb+srv://sharmah97035:Himanshu2001@cluster0.thhftwa.mongodb.net/mern1?retryWrites=true&w=majority
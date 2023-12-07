import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
const app = express();
const port = 5000;
import * as userController from "./src/controllers/controller.js";
import { connectDb } from "./config/db.js";
import { signUpSchema } from "./validators/validator.js";
import { validate } from "./middleware/validator.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

// handling cors
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credential: true,
}
app.use(cors(corsOptions));


// middleware
app.use(express.json());
// app.use(errorMiddleware);

app.get("/", userController.home);

app.post("/register",validate(signUpSchema), userController.getRegister,errorMiddleware);

app.post("/login", userController.getLogIn);

app.post("/contact", userController.contact);


connectDb().then(()=> {
  app.listen(port, (err) => {
  if (err) { console.log("Error in running the server") }
  console.log(`server is running on ${port}`);
});
});

//mongodb+srv://sharmah97035:Himanshu2001@cluster0.thhftwa.mongodb.net/mern1?retryWrites=true&w=majority

//MYFIRSTMERNPROJECT
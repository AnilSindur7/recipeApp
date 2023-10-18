import express from "express" 
//creating api
import cors from "cors"
//set up the rules frontend to backend
import mongoose from "mongoose"

import { userRouter } from "./routes/users.js"

import { recipesRouter } from "./routes/recipes.js"

const app = express();

app.use(express.json())

app.use(cors())

app.use("/auth", userRouter)

app.use("/recipes", recipesRouter)

mongoose.connect(
    "mongodb+srv://anil:MERNpassword123@recipes.r11lkvf.mongodb.net/recipes?retryWrites=true&w=majority"
);

app.listen(2001, ()=>{

    console.log("server started")
})
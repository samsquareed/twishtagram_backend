import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import AuthRoute from "./routes/auth.js"
import PostRoute from "./routes/posts.js"

dotenv.config()
const app = express();

// app.use(express.json())

//middlewares
app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(cors());
//custom routes middlewares
app.use("/auth", AuthRoute)
app.use("/post",PostRoute)

const PORT = process.env.PORT || 8080;

app.get("/", (req, res)=>{
    res.send("Twistagram developed by samsquare")
})

mongoose.connect(process.env.MONGOURI, ()=>{
    console.log("connected to Db");
})

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`);
})
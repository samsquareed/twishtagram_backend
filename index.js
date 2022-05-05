import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import AuthRoute from "./routes/auth.js"
import PostRoute from "./routes/posts.js"

const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 8080;

//middlewares
app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))


mongoose.connect(process.env.MONGOURI, ()=>{
    console.log("connected to Db");
})


//custom routes middlewares
app.use("/auth", AuthRoute)
app.use("/posts",PostRoute)


app.get("/", (req, res)=>{
    res.send("Twistagram developed by samsquare")
})

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`);
})
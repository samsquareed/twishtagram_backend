import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import AuthRoute from "./routes/auth.js"

const app = express();
const PORT = process.env.PORT || 8080;

//middlewares
app.use(bodyParser.json({ limit: '20mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(cors());

mongoose.connect(process.env.MONGOURI, ()=>{
    console.log("connected to Db");
})


//custom routes middlewares
app.use("/auth", AuthRoute)


app.get("/", (req, res)=>{
    res.send("Twistagram developed by samsquare")
})

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`);
})
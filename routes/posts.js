import express from "express";
const router = express.Router()
import {CreatePost} from "../controllers/posts.js"

router.post("/createpost", CreatePost )


export default router;
import express from "express";
const router = express.Router()
import {CreatePost,GetAllPosts} from "../controllers/posts.js"

router.post("/createpost", CreatePost )
router.get("/all",GetAllPosts)

export default router;
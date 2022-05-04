import express from "express";
const router = express.Router()
import {SignIn, signUp} from "../controllers/auth.js"

router.post("/signin", SignIn)
router.post("/signup", signUp)

export default router
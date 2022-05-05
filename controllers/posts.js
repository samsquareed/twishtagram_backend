import Post from "../models/Post.js"

//create post
export const CreatePost = async (req,res) => {
    try {
        const {userId, caption, image} = req.body;
        const newPost = await Post.create({userId, caption, image})
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}
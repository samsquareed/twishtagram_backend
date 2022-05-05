import Post from "../models/Post.js"

//create post
export const CreatePost = async (req,res) => {
    try {
        const post = req.body;
        const newPost = new Post({...post})
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(500).json(error)
    }
}
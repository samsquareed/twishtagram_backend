import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
    },
    caption : {
        type : String,
    },
    image : {
        type : String, 
        required : true
    }
},{
    timestamps : true
})

export default mongoose.model("post", PostSchema)
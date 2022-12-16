import IPost from "@/types/post";
import { model, Schema } from "mongoose";

const postSchema = new Schema<IPost>({
    title: String,
    image_url: String,
    weight: Number,
    size: Number,
    style: String,
    price: Number,
    description: String,
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "comments",
        },
    ],
    createdAt: Date,
    bookings: [
        {
            type: Schema.Types.ObjectId,
            ref: "bookings",
        },
    ],
    isAvailable: Boolean,
})

const Post = model('posts', postSchema);

export default Post;
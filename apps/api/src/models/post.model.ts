import { model, Schema } from "mongoose";

import IPost from "../types/post.type";

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
    createdAt: {
        type: Date,
        default: Date.now
    },
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
import { model, Schema, SchemaTypes } from "mongoose";

import IComment from "../types/comment.type";

const commentSchema = new Schema<IComment>({
    username: String,
    description: String,
    stars: Number,
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: [
        {
            type: SchemaTypes.ObjectId,
            ref: 'Post',
        },
    ],
});

const Comment = model<IComment>('Comment', commentSchema);

export default Comment;
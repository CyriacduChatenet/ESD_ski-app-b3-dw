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
            ref: 'posts',
        },
    ],
});

const Comment = model<IComment>('comments', commentSchema);

export default Comment;
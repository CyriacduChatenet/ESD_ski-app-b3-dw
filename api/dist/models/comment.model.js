"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    username: String,
    description: String,
    stars: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Post',
        },
    ],
});
const Comment = (0, mongoose_1.model)('Comment', commentSchema);
exports.default = Comment;

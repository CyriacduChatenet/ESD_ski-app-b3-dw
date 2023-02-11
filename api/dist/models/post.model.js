"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: String,
    imageUrl: String,
    weight: Number,
    size: Number,
    style: String,
    price: Number,
    description: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isAvailable: Boolean,
    bookings: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: "Booking",
        },
    ],
    comments: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: "Comment",
        },
    ],
    shop: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: "Shop",
        },
    ],
});
const Post = (0, mongoose_1.model)("Post", postSchema);
exports.default = Post;

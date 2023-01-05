import { Request } from "express";

import Comment from "../models/comment.model";

export const getAllCommentsService = async () => {
    return await Comment.find();
};

export const createCommentService = async (req: Request) => {
    return await Comment.create({
        username: req.body.username,
        description: req.body.description,
        stars: req.body.stars,
        createdAt: req.body.createdAt,
        post: req.body.post
    })
}
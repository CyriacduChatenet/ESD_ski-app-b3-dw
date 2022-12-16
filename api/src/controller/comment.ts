import { Request, Response } from "express";

import Comment from "../models/comment";

export const getAllComments = async (req: Request, res: Response) => {
    const comments = await Comment.find();
    res.status(200).json(comments);
};
export const createComment = async (req: Request, res: Response) => {
    const comments = await Comment.create({
        username: req.body.username,
        description: req.body.description,
        stars: req.body.stars,
        createdAt: req.body.createdAt,
        post: req.body.post
    })
    res.status(201).send('create comment');
};
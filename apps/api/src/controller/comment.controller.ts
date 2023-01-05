import { Request, Response } from "express";

import { createCommentService, getAllCommentsService } from "../services/comment.service";

export const getAllComments = async (req: Request, res: Response) => {
    const comments = await getAllCommentsService();
    return res.status(200).json(comments);
};

export const createComment = async (req: Request, res: Response) => {
    await createCommentService(req);
    return res.status(201).send('create comment');
};
import { Request, Response } from "express";

import { CommentService } from "../services/comment.service";

const commentService = new CommentService();

export class CommentController {
    
    public async getAllComments (req: Request, res: Response) {
        const comments = await commentService.findAll();
        return res.status(200).json(comments);
    };

    public async createComment (req: Request, res: Response) {
        await commentService.createOne(req);
        return res.status(201).send('create comment');
    };
};
import { Request, Response } from "express";

import { CommentService } from "../services/comment.service";

const commentService = new CommentService();

export class CommentController {
    
    public async getAllComments (req: Request, res: Response) {
        const comments = await commentService.findAll();
        return res.status(200).json(comments);
    };

    public async getOneCommentById (req: Request, res: Response) {
        const comment = await commentService.findOne(req.params.id);
        return res.status(200).json(comment);
    };

    public async createComment (req: Request, res: Response) {
        const comment = await commentService.createOne(req);
        return res.status(201).json(comment);
    };

    public async updateOne (req: Request, res: Response) {
        const comment = await commentService.updateOne(req, req.params.id);
        return res.status(200).json(comment);
    }

    public async deleteOne (req: Request, res: Response) {
        const comment = await commentService.deleteOne(req.params.id);
    }
};
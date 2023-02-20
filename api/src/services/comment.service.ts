import { Request } from "express";
import { CommentDTO } from "../dto/comment.dto";

import Comment from "../models/comment.model";

export class CommentService {
    
    public async findAll () {
        return await Comment.find().populate(['post']);
    };

    public async findOne (_id: string) {
        return await Comment.findOne({_id}).populate(['post']);
    };

    public async createOne (req: Request) {
        return await Comment.create(CommentDTO(req))
    }

    public async updateOne (req: Request, _id: string) {
        return await Comment.findByIdAndUpdate(_id, CommentDTO(req))
    }

    public async deleteOne (_id: string) {
        return await Comment.deleteOne({_id});
    };
}
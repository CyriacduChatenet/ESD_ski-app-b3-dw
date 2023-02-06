import { Request } from "express";
import { CommentDTO } from "../dto/comment.dto";

import Comment from "../models/comment.model";

export class CommentService {
    
    public async findAll () {
        return await Comment.find();
    };

    public async createOne (req: Request) {
        return await Comment.create(CommentDTO(req))
    }
}
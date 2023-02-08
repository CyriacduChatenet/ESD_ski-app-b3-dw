import { Request } from "express";

export const CommentDTO = (req: Request) => {
    return {
        username: req.body.username,
        description: req.body.description,
        stars: req.body.stars,
        post: req.body.post
    }
};
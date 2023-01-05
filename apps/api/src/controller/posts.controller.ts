import { Request, Response } from "express";

import { PostDTO } from "../dto/post.dto";
import Post from "../models/post.model";
import { PostService } from "../services/post.service";

const postService = new PostService();

export class PostController {
    
    public async findAll (_req: Request, res: Response) {
        const posts = await postService.findAll();
        return res.status(200).json(posts);
    };

    public async findOneById (req: Request, res: Response) {
        const post = await postService.FindOneById(req);
        res.status(200).json(post);
    };

    public async createOne (req: Request, res: Response) {

        const newPost = await postService.createOne(PostDTO(req));
        res.status(201).json(newPost);
    };

    public async updateOne (req: Request, res: Response) {
        await postService.updateOne(req.params.id, PostDTO(req))
        res.status(202).json({sucess : true, message: 'post is successfully updated'});
    };

    public async deleteOne (req: Request, res: Response) {
        await postService.deleteOne(req);
        res.status(204).json('delete single post');
    };
}
import { Request, Response } from "express";

import { PostDTO } from "../dto/post.dto";
import Post from "../models/post.model";
import { createPostService, getAllPostsService, getPostByIdService, updatePostService } from "../services/post.service";


export const getAllPosts = async (_req: Request, res: Response) => {
    const posts = await getAllPostsService();
    return res.status(200).json(posts);
};

export const getSinglePosts = async (req: Request, res: Response) => {
    const post = await getPostByIdService(req.params.id);
    res.status(200).json(post);
};

export const createPost = async (req: Request, res: Response) => {

    const newPost = await createPostService(PostDTO(req))
    res.status(201).json(newPost);
};

export const updatePost = async (req: Request, res: Response) => {
    await updatePostService(req.params.id, PostDTO(req));
    res.status(202).json({sucess : true, message: 'post is successfully updated'});
};
export const deletePost = async (req: Request, res: Response) => {
    const post = Post.findByIdAndDelete({_id: req.params.id});
    res.status(204).json('delete single post');
};
import { Request, Response } from "express";

export const getAllPosts = (req: Request, res: Response) => {
    res.status(200).json('get all posts');
};

export const getSinglePosts = (req: Request, res: Response) => {
    res.status(200).json('get single post');
};

export const createPost = (req: Request, res: Response) => {
    res.status(201).json('create single post');
};

export const updatePost = (req: Request, res: Response) => {
    res.status(202).json('update single post');
};
export const deletePost = (req: Request, res: Response) => {
    res.status(204).json('delete single post');
};
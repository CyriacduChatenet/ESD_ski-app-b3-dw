import { Request, Response } from "express";

import Post from "../models/post";


export const getAllPosts = async (_req: Request, res: Response) => {
    const posts = await Post.find()
    res.status(200).json(posts);
};

export const getSinglePosts = async (req: Request, res: Response) => {
    const post = await Post.find({_id: req.params.id})
    res.status(200).json(post);
};

export const createPost = async (req: Request, res: Response) => {
    const post = await Post.create({
        title: req.body.title,
        image_url: req.body.image_url,
        weight: req.body.weight,
        size: req.body.size,
        style: req.body.style,
        price: req.body.price,
        description: req.body.description,
        comments: req.body.comments,
        createdAt: req.body.createdAt,
        bookings: req.body.bookings,
        isAvailable: req.body.isAvailable,
    });
    res.status(201).json(post);
};

export const updatePost = async (req: Request, res: Response) => {
    await Post.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
            title: req.body.title,
            image_url: req.body.image_url,
            weight: req.body.weight,
            size: req.body.size,
            style: req.body.style,
            price: req.body.price,
            description: req.body.description,
            comments: req.body.comments,
            createdAt: req.body.createdAt,
            bookings: req.body.bookings,
            isAvailable: req.body.isAvailable,
        }
    })
    res.status(202).json({sucess : true, message: 'post is successfully updated'});
};
export const deletePost = async (req: Request, res: Response) => {
    const post = Post.findByIdAndDelete({_id: req.params.id});
    res.status(204).json('delete single post');
};
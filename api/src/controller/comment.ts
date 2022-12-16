import { Request, Response } from "express";

export const getAllComments = (req: Request, res: Response) => {
    res.status(200).send('get all comments');
};
export const createComment = (req: Request, res: Response) => {
    res.status(201).send('create comment');
};
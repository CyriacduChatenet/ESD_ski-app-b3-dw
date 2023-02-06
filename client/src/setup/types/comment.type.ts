import { Post } from "@/setup/types/post.type";

export type Comment = {
    _id: string;
    username:string;
    description: string;
    stars: number;
    createdAt: Date;
    post: Post[];
};

export type CommentCredentials = {
    username:string;
    description: string;
    stars: number;
    createdAt: Date;
    post: Post[];
};
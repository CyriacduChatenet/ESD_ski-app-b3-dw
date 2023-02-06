import IPost from "./post.type";

export default interface IComment {
    _id?: string;
    username: string;
    description: string;
    stars: number;
    createdAt: Date;
    post: IPost;
};
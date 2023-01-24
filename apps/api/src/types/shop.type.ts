import IPost from "./post.type";

export interface IShop {
    _id: string;
    name: string;
    posts : IPost[];
    addresse: string;
}
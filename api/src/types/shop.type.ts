import IPost from "./post.type";
import { IUser } from "./user.type.";

export interface IShop {
    _id: string;
    name: string;
    posts : IPost[];
    addresse: string;
    user?: IUser;
}
import { Post } from "@/setup/types/post.type";

export type Shop = {
    _id: string;
    name: string;
    posts : Post[];
    addresse: string;
};
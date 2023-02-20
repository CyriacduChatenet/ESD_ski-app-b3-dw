import { useFetch as useFetchHook } from "@/setup/hooks/useFetch.hook";
import { PostService } from "@/setup/services/post.service";
import { Dispatch, SetStateAction } from "react";
import { Post } from "../types/post.type";

export class CommentService {
    useFetch = new useFetchHook();
    postService = new PostService();

    findAll(url: string) {
        return this.useFetch.get(url);
    };

    findOne(url: string, id: string) {
        return this.useFetch.get(`${url}/${id}`);
    };

    create(url: string, credentials: Object) {
        return this.useFetch.post(url, credentials);
    };

    updateOne(url: string, credentials: Object) {
        return this.useFetch.patch(url, credentials);
    };

    deleteOne(url: string, id: string) {
        return this.useFetch.delete(`${url}/${id}`, String(localStorage.getItem('acessToken')));
    };
};
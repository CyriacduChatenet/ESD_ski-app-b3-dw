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
        return this.useFetch.patch(url, credentials, String(localStorage.getItem('acessToken')));
    };

    async createAndUpdate(comment_url: string, post_url: string, credentials: Object, setState: Dispatch<SetStateAction<Post[]>>) {
        const post = await this.postService.findOne(post_url);
		const comment = await this.create(comment_url, credentials);
		await this.postService.updateOne(post_url, { comments: [...post[0].comments, `${comment._id}`]})
        const refetchPost = await this.postService.findOne(post_url);
        setState(refetchPost);
	};

    deleteOne(url: string, id: string) {
        return this.useFetch.delete(`${url}/${id}`, String(localStorage.getItem('acessToken')));
    };
};
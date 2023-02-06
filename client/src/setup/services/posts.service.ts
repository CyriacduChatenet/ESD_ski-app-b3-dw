import { Dispatch, SetStateAction } from "react";

import { useFetchHook } from "@/setup/hooks/useFetch.hook";
import { ApiResponse } from "@/setup/types/apiResponse.type";
import { Booking, BookingCredentials } from "@/setup/types/booking.type";
import { CommentCredentials } from "@/setup/types/comment.type";
import { PostCredentials } from "@/setup/types/post.type";
import { ShopCredentials } from "@/setup/types/shop.type";

export class PostService {
    useFetch = new useFetchHook();

    findAll = async (url: string, setState: Dispatch<SetStateAction<ApiResponse>>) => {
        const response = await this.useFetch.get(url);
        return setState(response);
    };

    findOne = async (url: string, id: string, setState: Dispatch<SetStateAction<ApiResponse>>) => {
        const response = await this.useFetch.get(`${url}/${id}`);
        return setState(response);
    };

    create = async (url: string, credentials: PostCredentials | BookingCredentials | CommentCredentials | ShopCredentials, setState: Dispatch<SetStateAction<ApiResponse>>) => {
        const response = await this.useFetch.post(url,credentials);
        return setState(response);
    };

    update = async (url: string, id: string, credentials: PostCredentials | BookingCredentials | CommentCredentials | ShopCredentials, setState: Dispatch<SetStateAction<ApiResponse>>) => {
        await this.useFetch.put(`${url}/${id}`, credentials);
        const response = await this.useFetch.get(url);
        return setState(response);
    };

    delete = async (url: string, id: string, setState: Dispatch<SetStateAction<ApiResponse>>) => {
        await this.useFetch.delete(`${url}/${id}`);
        const response = await this.useFetch.get(url);
        return setState(response);
    };
}
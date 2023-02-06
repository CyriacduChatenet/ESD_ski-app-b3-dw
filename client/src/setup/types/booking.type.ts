import { Post } from "@/setup/types/post.type";

export type Booking = {
    _id: string;
    phoneNumber: string;
    createdAt: Date;
    post: Post[];
};

export type BookingCredentials = {
    phoneNumber: string;
    createdAt: Date;
    post: Post[];
};
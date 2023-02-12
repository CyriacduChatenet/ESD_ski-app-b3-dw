import { Booking } from "@/setup/types/booking.type";
import { Comment } from "@/setup/types/comment.type";
import { Shop } from "@/setup/types/shop.type";

export type Post = {
	id: string;
    _id: string;
    title: string;
    imageUrl: string;
    weight: number;
    size: number;
    style: string;
    price: number;
    description: string;
    createdAt: Date;
    isAvailable: boolean;
    bookings: Booking[];
    shop: Shop[];
    comments: Comment[];
};
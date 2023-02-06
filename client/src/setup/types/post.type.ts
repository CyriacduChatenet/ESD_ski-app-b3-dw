import { Booking } from "@/setup/types/booking.type";
import { Shop } from "@/setup/types/shop.type";

export type Post = {
    _id: string;
    title: string;
    image_url: string
    weight: number;
    size: number;
    style: string;
    price: number;
    description: string;
    comments: Comment[];
    created_at: Date;
    bookings: Booking[];
    isAvailable: boolean;
    shop: Shop[];
}

export type PostCredentials = {
    title: string;
    image_url: string
    weight: number;
    size: number;
    style: string;
    price: number;
    description: string;
    comments: Comment[];
    created_at: Date;
    bookings: Booking[];
    isAvailable: boolean;
    shop: Shop[];
}
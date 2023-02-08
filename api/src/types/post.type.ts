import IBooking from "./booking.type";
import IComment from "./comment.type";
import { IShop } from "./shop.type";

export default interface IPost {
    _id?: string;
    title: string;
    imageUrl: string;
    weight: number;
    size: number;
    style: string;
    price: number;
    description: string;
    isAvailable: boolean;
    createdAt: Date;
    comments: IComment[];
    bookings: IBooking[];
    shop: IShop[];
};
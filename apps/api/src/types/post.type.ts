import IBooking from "./booking.type";
import IComment from "./comment.type";

export default interface IPost {
    _id?: string;
    title: string;
    image_url: string;
    weight: number;
    size: number;
    style: string;
    price: number;
    description: string;
    comments: IComment[];
    createdAt: Date;
    bookings: IBooking[];
    isAvailable: boolean;
};
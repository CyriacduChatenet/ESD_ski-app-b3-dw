import IPost from "./post";

export default interface IBooking {
    _id?: string;
    phoneNumber: string;
    createdAt: Date;
    post: IPost;
};
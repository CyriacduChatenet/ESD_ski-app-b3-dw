import IPost from "./post.type";


export default interface IBooking {
    _id?: string;
    phoneNumber: string;
    post: IPost;
    createdAt: Date;
};
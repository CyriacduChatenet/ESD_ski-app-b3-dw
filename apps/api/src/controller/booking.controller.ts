import { Request, Response } from "express";

import Booking from "../models/booking.model";

export const getAllBooking = async (req: Request, res: Response) => {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
};
export const updateBooking = async (req: Request, res: Response) => {
    await Booking.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
            phoneNumber: req.body.phoneNumber,
            createdAt: req.body.createdAt,
            post: req.body.post,
        }
    })
    res.status(202).send('update booking');
};
export const deleteBooking = async (req: Request, res: Response) => {
    await Booking.findByIdAndDelete({_id: req.params.id});
    res.status(204).send('delete booking');
};
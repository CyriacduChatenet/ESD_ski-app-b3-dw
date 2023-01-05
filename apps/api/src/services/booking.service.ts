import { Request } from "express";

import Booking from "../models/booking.model";

export const getAllBookingService = async () => {
    return await Booking.find();
};

export const updateBookingService = async (req: Request) => {
    return await Booking.findByIdAndUpdate({_id: req.params.id}, {
        $set: {
            phoneNumber: req.body.phoneNumber,
            createdAt: req.body.createdAt,
            post: req.body.post,
        }
    })
}

export const deleteBookingService = async (req: Request) => {
    return await Booking.findByIdAndDelete({_id: req.params.id});
};
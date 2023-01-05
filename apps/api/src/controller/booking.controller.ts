import { Request, Response } from "express";

import { deleteBookingService, getAllBookingService, updateBookingService } from "../services/booking.service";

export const getAllBooking = async (req: Request, res: Response) => {
    const bookings = await getAllBookingService();
    return res.status(200).json(bookings);
};

export const updateBooking = async (req: Request, res: Response) => {
    await updateBookingService(req);
    return res.status(202).send('update booking');
};

export const deleteBooking = async (req: Request, res: Response) => {
    await deleteBookingService(req);
    return res.status(204).send('delete booking');
};
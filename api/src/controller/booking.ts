import { Request, Response } from "express";

export const getAllBooking = (req: Request, res: Response) => {
    res.status(200).send('get all bookings');
};
export const updateBooking = (req: Request, res: Response) => {
    res.status(202).send('update booking');
};
export const deleteBooking = (req: Request, res: Response) => {
    res.status(204).send('delete booking');
};
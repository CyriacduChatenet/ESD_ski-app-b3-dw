import { Request, Response } from "express";

import { BookingService } from "../services/booking.service";

const bookingService = new BookingService();

export class BookingController {
    
    public async getAllBooking (req: Request, res: Response) {
        const bookings = await bookingService.findAll();
        return res.status(200).json(bookings);
    };

    public async createBooking (req: Request, res: Response) {
        const bookings = await bookingService.createOne(req);
        return res.status(201).json(bookings);
    };

    public async updateBooking (req: Request, res: Response) {
        await bookingService.updateOne(req);
        return res.status(202).send('update booking');
    };

    public async deleteBooking (req: Request, res: Response) {
        await bookingService.deleteOne(req);
        return res.status(204).send('delete booking');
    };
}
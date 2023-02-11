import { Request } from "express";

import Booking from "../models/booking.model";

export class BookingService {
    
    public async findAll()  {
        return await Booking.find().populate(['post']);
    };

    public async findOne(_id: string) {
        return await Booking.findOne({_id}).populate(['post']);
    };

    public async createOne (req: Request) {
        return await Booking.create(req.body);
    }

    public async updateOne (req: Request) {
        return await Booking.findByIdAndUpdate({_id: req.params.id}, {
            $set: {
                phoneNumber: req.body.phoneNumber,
                createdAt: req.body.createdAt,
                post: req.body.post,
            }
        })
    }

    public async deleteOne (req: Request) {
        return await Booking.findByIdAndDelete({_id: req.params.id});
    };
}
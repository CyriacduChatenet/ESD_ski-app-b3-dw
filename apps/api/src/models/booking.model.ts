import { model, Schema, SchemaTypes } from "mongoose";

import IBooking from "../types/booking.type";

const bookingSchema = new Schema<IBooking>({
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: [
        {
            type: SchemaTypes.ObjectId,
            ref: "posts",
        },
    ],
});

const Booking = model<IBooking>('bookings', bookingSchema);

export default Booking;
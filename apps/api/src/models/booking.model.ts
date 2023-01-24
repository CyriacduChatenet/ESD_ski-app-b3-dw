import { model, Schema, SchemaTypes } from "mongoose";

import IBooking from "../types/booking.type";

const bookingSchema = new Schema<IBooking>({
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
});

const Booking = model<IBooking>('Booking', bookingSchema);

export default Booking;
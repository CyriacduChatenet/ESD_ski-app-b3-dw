import { model, Schema, SchemaTypes } from "mongoose";

import IBooking from "../types/booking";

const bookingSchema = new Schema<IBooking>({
    phoneNumber: String,
    createdAt: Date,
    post: [
        {
            type: SchemaTypes.ObjectId,
            ref: "posts",
        },
    ],
});

const Booking = model<IBooking>('bookings', bookingSchema);

export default Booking;
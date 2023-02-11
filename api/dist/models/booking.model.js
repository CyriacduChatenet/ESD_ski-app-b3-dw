"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    phoneNumber: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: 'Post',
        },
    ],
});
const Booking = (0, mongoose_1.model)('Booking', bookingSchema);
exports.default = Booking;

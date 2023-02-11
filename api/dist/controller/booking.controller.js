"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const booking_service_1 = require("../services/booking.service");
const bookingService = new booking_service_1.BookingService();
class BookingController {
    getAllBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookings = yield bookingService.findAll();
            return res.status(200).json(bookings);
        });
    }
    ;
    getOneBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const booking = yield bookingService.findOne(req.params.id);
            return res.status(200).json(booking);
        });
    }
    ;
    createBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const bookings = yield bookingService.createOne(req);
            return res.status(201).json(bookings);
        });
    }
    ;
    updateBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bookingService.updateOne(req);
            return res.status(202).send('update booking');
        });
    }
    ;
    deleteBooking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield bookingService.deleteOne(req);
            return res.status(204).send('delete booking');
        });
    }
    ;
}
exports.BookingController = BookingController;

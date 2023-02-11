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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
const booking_model_1 = __importDefault(require("../models/booking.model"));
class BookingService {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield booking_model_1.default.find();
        });
    }
    ;
    findOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield booking_model_1.default.findOne({ _id });
        });
    }
    ;
    createOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield booking_model_1.default.create(req.body);
        });
    }
    updateOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield booking_model_1.default.findByIdAndUpdate({ _id: req.params.id }, {
                $set: {
                    phoneNumber: req.body.phoneNumber,
                    createdAt: req.body.createdAt,
                    post: req.body.post,
                }
            });
        });
    }
    deleteOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield booking_model_1.default.findByIdAndDelete({ _id: req.params.id });
        });
    }
    ;
}
exports.BookingService = BookingService;

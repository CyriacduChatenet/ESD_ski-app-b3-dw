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
exports.CommentService = void 0;
const comment_dto_1 = require("../dto/comment.dto");
const comment_model_1 = __importDefault(require("../models/comment.model"));
class CommentService {
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_model_1.default.find();
        });
    }
    ;
    findOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_model_1.default.findOne({ _id });
        });
    }
    ;
    createOne(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_model_1.default.create((0, comment_dto_1.CommentDTO)(req));
        });
    }
    updateOne(req, _id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_model_1.default.findByIdAndUpdate(_id, (0, comment_dto_1.CommentDTO)(req));
        });
    }
    deleteOne(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield comment_model_1.default.deleteOne({ _id });
        });
    }
    ;
}
exports.CommentService = CommentService;

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
exports.CommentController = void 0;
const comment_service_1 = require("../services/comment.service");
const commentService = new comment_service_1.CommentService();
class CommentController {
    getAllComments(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comments = yield commentService.findAll();
            return res.status(200).json(comments);
        });
    }
    ;
    getOneCommentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield commentService.findOne(req.params.id);
            return res.status(200).json(comment);
        });
    }
    ;
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield commentService.createOne(req);
            return res.status(201).json(comment);
        });
    }
    ;
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield commentService.updateOne(req, req.params.id);
            return res.status(200).json(comment);
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const comment = yield commentService.deleteOne(req.params.id);
        });
    }
}
exports.CommentController = CommentController;
;

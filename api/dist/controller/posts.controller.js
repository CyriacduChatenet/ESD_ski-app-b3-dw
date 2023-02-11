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
exports.PostController = void 0;
const post_dto_1 = require("../dto/post.dto");
const post_service_1 = require("../services/post.service");
const postService = new post_service_1.PostService();
class PostController {
    findAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield postService.findAll();
            return res.status(200).json(posts);
        });
    }
    ;
    findOneById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield postService.FindOneById(req);
            res.status(200).json(post);
        });
    }
    ;
    createOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPost = yield postService.createOne((0, post_dto_1.PostDTO)(req));
            res.status(201).json(newPost);
        });
    }
    ;
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield postService.updateOne(req.params.id, (0, post_dto_1.PostDTO)(req));
            res.status(202).json({ sucess: true, message: 'post is successfully updated' });
        });
    }
    ;
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield postService.deleteOne(req);
            res.status(204).json('delete single post');
        });
    }
    ;
}
exports.PostController = PostController;

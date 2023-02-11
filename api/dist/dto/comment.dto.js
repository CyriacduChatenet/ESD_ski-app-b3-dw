"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentDTO = void 0;
const CommentDTO = (req) => {
    return {
        username: req.body.username,
        description: req.body.description,
        stars: req.body.stars,
        post: req.body.post
    };
};
exports.CommentDTO = CommentDTO;

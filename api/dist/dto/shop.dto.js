"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopDTO = void 0;
const ShopDTO = (req) => {
    return {
        name: req.body.name,
        posts: req.body.posts,
        addresse: req.body.addresse,
    };
};
exports.ShopDTO = ShopDTO;

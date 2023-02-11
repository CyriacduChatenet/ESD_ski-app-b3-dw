"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const shopSchema = new mongoose_1.Schema({
    name: String,
    posts: [
        {
            type: mongoose_1.SchemaTypes.ObjectId,
            ref: "Post",
        },
    ],
    addresse: String,
});
const Shop = (0, mongoose_1.model)("Shop", shopSchema);
exports.default = Shop;

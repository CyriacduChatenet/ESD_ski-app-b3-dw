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
const shop_dto_1 = require("../dto/shop.dto");
const shop_service_1 = __importDefault(require("../services/shop.service"));
const shopService = new shop_service_1.default;
class ShopController {
    findAllShops(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const shops = yield shopService.findAll();
            return res.status(200).json(shops);
        });
    }
    ;
    findOneShopById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield shopService.findOneById(req.params.id);
            return res.status(200).json(shop);
        });
    }
    ;
    createShop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield shopService.createOne((0, shop_dto_1.ShopDTO)(req));
            return res.status(201).json(shop);
        });
    }
    updateShop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield shopService.updateOne(req.params.id, (0, shop_dto_1.ShopDTO)(req));
            return res.status(204).json(shop);
        });
    }
    deleteShop(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const shop = yield shopService.deleteOne(req.params.id);
            return res.status(204);
        });
    }
}
exports.default = ShopController;

import express from 'express';

import { BookingController } from '../controller/booking.controller';
import { CommentController } from '../controller/comment.controller';
import { PostController } from '../controller/posts.controller';
import ShopController from '../controller/shop.controller';

const bookingController = new BookingController();
const commentController = new CommentController();
const postController = new PostController();
const shopController = new ShopController();

export const router = express.Router();

router.get('/posts', postController.findAll);
router.get('/posts/:id', postController.findOneById);
router.post('/posts/', postController.createOne);
router.patch('/posts/:id', postController.updateOne);
router.delete('/posts/:id', postController.deleteOne);

router.get('/comments', commentController.getAllComments);
router.post('/comments/', commentController.createComment);

router.get('/bookings/', bookingController.getAllBooking);
router.post('/bookings/', bookingController.createBooking);
router.put('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);

router.get('/shops', shopController.findAllShops);
router.get('/shops/:id', shopController. findOneShopById);
router.post('/shops', shopController.createShop);
router.put('/shops/:id', shopController.updateShop);
router.delete('/shops/:id', shopController.deleteShop);
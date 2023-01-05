import express from 'express';

import { BookingController } from '../controller/booking.controller';
import { CommentController } from '../controller/comment.controller';
import { PostController } from '../controller/posts.controller';

const bookingController = new BookingController();
const commentController = new CommentController();
const postController = new PostController();

export const router = express.Router();

router.get('/posts', postController.findAll);
router.get('/posts/:id', postController.findOneById);
router.post('/posts/', postController.createOne);
router.patch('/posts/:id', postController.updateOne);
router.delete('/posts/:id', postController.deleteOne);

router.get('/comments', commentController.getAllComments);
router.post('/comments/', commentController.createComment);

router.get('/bookings/', bookingController.getAllBooking);
router.patch('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);
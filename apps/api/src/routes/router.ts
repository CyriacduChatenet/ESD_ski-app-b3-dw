import express, { Request, Response } from 'express';

import { createPost, deletePost, getAllPosts, getSinglePosts, updatePost } from '../controller/posts.controller';
import { deleteBooking, getAllBooking, updateBooking } from '../controller/booking.controller';
import { createComment, getAllComments } from '../controller/comment.controller';

export const router = express.Router();

router.get('/posts', getAllPosts);
router.get('/posts/:id', getSinglePosts);
router.post('/posts/', createPost);
router.patch('/posts/:id', updatePost);
router.delete('/posts/:id', deletePost);

router.get('/comments', getAllComments);
router.post('/comments/', createComment);

router.get('/bookings/', getAllBooking);
router.patch('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);
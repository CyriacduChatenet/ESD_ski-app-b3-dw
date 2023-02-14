import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import YAML from 'yamljs'
import path from 'path';

import { BookingController } from '../controller/booking.controller';
import { CommentController } from '../controller/comment.controller';
import { PostController } from '../controller/posts.controller';
import ShopController from '../controller/shop.controller';

const bookingController = new BookingController();
const commentController = new CommentController();
const postController = new PostController();
const shopController = new ShopController();

export const router = express.Router();

// const options = {
//     failOnErrors: true,
//     definition: {
//         openapi: '3.0.0',
//         info: {
//         title: 'App ski API',
//         version: '1.0.0',
//         },
//     },
//     apis: ['src/app.module.ts', 'src/doc/definition.yaml'],
// };
// const openapiSpecification = swaggerJSDoc(options);
// router.use('/doc', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/definition.yaml'));
const options = {
    customCssUrl: path.join(__dirname, '../doc/swagger.css'),
}

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

router.get('/posts', postController.findAll);
router.get('/posts/:id', postController.findOneById);
router.post('/posts/', postController.createOne);
router.patch('/posts/:id', postController.updateOne);
router.delete('/posts/:id', postController.deleteOne);

router.get('/comments', commentController.getAllComments);
router.get('/comments/:id', commentController.getOneCommentById);
router.post('/comments', commentController.createComment);
router.patch('/comments/:id', commentController.updateOne);
router.delete('/comments/:id', commentController.deleteOne);

router.get('/bookings/', bookingController.getAllBooking);
router.get('/bookings/:id', bookingController.getOneBooking);
router.post('/bookings/', bookingController.createBooking);
router.patch('/bookings/:id', bookingController.updateBooking);
router.delete('/bookings/:id', bookingController.deleteBooking);

router.get('/shops', shopController.findAllShops);
router.get('/shops/:id', shopController. findOneShopById);
router.post('/shops', shopController.createShop);
router.patch('/shops/:id', shopController.updateShop);
router.delete('/shops/:id', shopController.deleteShop);
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs'
import path from 'path';

import { BookingController } from '../controller/booking.controller';
import { CommentController } from '../controller/comment.controller';
import { PostController } from '../controller/posts.controller';
import ShopController from '../controller/shop.controller';
import UserController from '../controller/user.controller';
import AuthController from '../controller/auth.controller';
import ResetPasswordTokenController from '../controller/resetTokenPassword.controller';
import ForgotPasswordController from '../controller/forgot-password.controller';
import validateUser from '../middleware/auth.middleware';

const bookingController = new BookingController();
const commentController = new CommentController();
const postController = new PostController();
const shopController = new ShopController();
const userController = new UserController();
const authController = new AuthController();
const resetTokenPasswordController = new ResetPasswordTokenController();
const forgotPasswordController = new ForgotPasswordController();

export const router = express.Router();

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/definition.yaml'))

const options = {
    customCssUrl: path.resolve(__dirname, '../../node_modules/swagger-ui-dist/swagger-ui.css'),
}

router.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

router.get('/posts', postController.findAll);
router.get('/posts/:id', postController.findOneById);
router.post('/posts/', postController.createOne);
router.patch('/posts/:id', postController.updateOne);
router.delete('/posts/:id', validateUser, postController.deleteOne);

router.get('/comments', commentController.getAllComments);
router.get('/comments/:id', commentController.getOneCommentById);
router.post('/comments', commentController.createComment);
router.patch('/comments/:id', validateUser, commentController.updateOne);
router.delete('/comments/:id', validateUser, commentController.deleteOne);

router.get('/bookings/', bookingController.getAllBooking);
router.get('/bookings/:id', bookingController.getOneBooking);
router.post('/bookings/', bookingController.createBooking);
router.patch('/bookings/:id', validateUser, bookingController.updateBooking);
router.delete('/bookings/:id', validateUser, bookingController.deleteBooking);

router.get('/shops', shopController.findAllShops);
router.get('/shops/:id', shopController. findOneShopById);
router.post('/shops', shopController.createShop);
router.patch('/shops/:id', shopController.updateShop);
router.delete('/shops/:id', validateUser, shopController.deleteShop);

router.get('/users', userController.findAllUsers);
router.get('/user/:id', userController.findOneUserById);
router.get('/user/email/:email', userController.findOneUserByEmail);
router.post('/user', userController.createUser);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', validateUser, userController.deleteUser);

router.post('/auth/signin', authController.signIn);
router.post('/auth/signup', authController.signUp);
router.post('/auth/forgot-password', forgotPasswordController.sendToken);

router.get('/auth/reset-token-password', resetTokenPasswordController.findAllResetTokensPassword);
router.get('/auth/reset-token-password/:resetToken', resetTokenPasswordController.findOneResetTokenPasswordByToken);
router.post('/auth/reset-token-password', resetTokenPasswordController.createResetTokenPassword);
router.patch('/auth/reset-token-password/:id', validateUser, resetTokenPasswordController.updateResetTokenPassword);
router.delete('/auth/reset-token-password/:id', validateUser, resetTokenPasswordController.deleteResetTokenPassword);
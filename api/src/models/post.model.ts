import { model, Schema, SchemaTypes } from 'mongoose';

import IPost from '../types/post.type';

const postSchema = new Schema<IPost>({
	title: String,
	imageUrl: String,
	weight: Number,
	size: Number,
	style: String,
	price: Number,
	description: String,
	createdAt: {
		type: Date,
		default: Date.now,
	},
	isAvailable: Boolean,
	bookings: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'Booking',
		},
	],
	comments: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'Comment',
		},
	],
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'Shop'
  },
});

const Post = model('Post', postSchema);

export default Post;

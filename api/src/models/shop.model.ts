import { model, Schema, SchemaTypes } from 'mongoose';
import { IShop } from '../types/shop.type';

const shopSchema = new Schema<IShop>({
	name: String,
	posts: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'Post',
		},
	],
	user: {
		type: SchemaTypes.ObjectId,
		ref: 'User',
	},
	addresse: String,
});

const Shop = model<IShop>('Shop', shopSchema);

export default Shop;

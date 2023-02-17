import { model, Schema, SchemaTypes } from 'mongoose';
import { IUser } from '../types/user.type.';

const userSchema = new Schema<IUser>({
	username: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	password: {
		type: String,
	},
	resetTokenPassword: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'ResetTokenPassword',
		},
	],
	shop: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'Shop',
		},
	]
});

const User = model<IUser>('User', userSchema);

export default User;

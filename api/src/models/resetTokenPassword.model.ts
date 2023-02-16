import { model, Schema, SchemaTypes } from 'mongoose';

import { IResetTokenPassword } from '../types/reset_token.type';

const resetTokenPasswordSchema = new Schema<IResetTokenPassword>({
	reset_token: String,
	user: [
		{
			type: SchemaTypes.ObjectId,
			ref: 'User',
		},
	],
});

const ResetTokenPassword = model('ResetTokenPassword', resetTokenPasswordSchema);

export default ResetTokenPassword;

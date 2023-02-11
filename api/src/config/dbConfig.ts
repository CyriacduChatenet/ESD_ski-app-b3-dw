import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const DBconnection = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(`${process.env.MONGODB_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } as ConnectOptions, (err: any) => {
        if(err) throw new Error(err);
        else console.log('Connected to Mongo')
    })
};
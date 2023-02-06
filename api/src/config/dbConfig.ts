import mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const DBconnection = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:27017/`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    } as ConnectOptions, (err: any) => {
        if(err) throw new Error(err);
        else console.log('Connected to Mongo')
    })
};
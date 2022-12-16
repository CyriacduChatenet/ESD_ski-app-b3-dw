import mongoose, { ConnectOptions } from "mongoose";

export const DBonnection = () => {
    mongoose.connect('', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    } as ConnectOptions, (err) => {
        if(!err) console.log('Connected to MongoDB');
        else console.log(`Failed to connect to MongoDB : ${err}`);
    });
};
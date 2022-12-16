import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './routes/router';
import { DBconnection } from './database/dbConfig';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
DBconnection();

app.use('/api',router);

app.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT)
});
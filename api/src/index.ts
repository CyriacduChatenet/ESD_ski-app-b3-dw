import express from 'express';
import dotenv from 'dotenv';

import { router } from './routes/router';
import { DBonnection } from './database/dbConfig';

dotenv.config();

const app = express();
DBonnection();

app.use('/api',router);

app.listen(process.env.PORT, () => {
    console.log('Server started on port ' + process.env.PORT)
});
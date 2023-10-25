import express from 'express'
import accountRouter from './account.routes';
import recordListRouter from './recordList.routes';
import authRouter from './auth.routes'
import { errorHandler } from '../middlewares/errorHandler';
import { BadRequest } from '../exceptions/Errors';
import { accountValidator } from '../middlewares/validator';

const app = express();

app.use(express.json());
app.use('/account', accountRouter)
app.use('/record-list', recordListRouter)
app.use('/auth', authRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use(errorHandler)


export default app;
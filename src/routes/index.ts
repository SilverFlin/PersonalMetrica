import express from 'express'
import accountRouter from './account.routes';
import recordListRouter from './recordList.routes';

const app = express();

app.use(express.json());
app.use('/account', accountRouter)
app.use('/record-list', recordListRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})


export default app;
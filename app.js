import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//functions
import { sanitizeRequestBody } from './middlewares.js';
import db from './buydepa.js';

const app = express();
const port = process.env.PORT || 9000;
const whitelist = JSON.parse(process.env.WHITELIST)



app.use(express.json());
app.use(sanitizeRequestBody);


app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.get('/api', (req, res) => {
    res.send({
        status: 200,
        ip: req.ip,
        host: req.hostname,
        message: 'App is up and running'
    });
});

app.post('/api', (req, res) => {
    const request = {
        ip: req.ip,
        host: req.hostname,
        body: req.body
    };
    console.log(request);
    res.send({
        status: 200,
        message: 'Welcome to the API',
        request: req.body ? req.body : 'No data'
    });
});


//Buy depa
app.get('/api/buydepa', async (req, res) => {
    console.log('buydepa fetched')
    res.json(db);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
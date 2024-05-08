import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//functions
import { sanitizeRequestBody } from './middlewares.js';

const app = express();
const port = process.env.PORT || 9000;
const whitelist = JSON.parse(process.env.WHITELIST)



app.use(cors({
    origin: whitelist, 
}));

app.use(express.json());
app.use(sanitizeRequestBody);

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
import express from 'express';
import {auth} from './auth.js'
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('App is up and running!');
});

app.post('/api/monitor', auth, (req, res) => {
    const now = new Date();

    const centralTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).format(now).replace(',', '');

    console.log('--- Incoming Request ---');
    console.log('Time (CT):', centralTime);  // Example: "04/11/2025 14:35"
    console.log('IP Address:', req.ip || req.connection.remoteAddress);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('------------------------');

    res.status(200).send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT:${PORT}`);
});
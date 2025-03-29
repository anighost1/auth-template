import express from 'express';
import cors from 'cors'
import mongoConnect from './config/mongodb.config.js';
import path from 'path'
import { fileURLToPath } from 'url';

import authRoute from './routes/auth.route.js'


const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 5555;

mongoConnect()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Welcome to AT IMS')
})

app.use('/api/auth', authRoute)

app.listen(port, () => {
    console.log(`AT IMS server running at port : ${port}`);
});
import express from 'express';
import { connect } from 'mongoose';
import connectDB from './db.js';
import ArticleRoute from './routes/ArticleRoute.js';
import { config } from 'dotenv';

const app = express();

app.use(express.json());

config();

const PORT = process.env.PORT || 3000;
app.use('/api', ArticleRoute);
connectDB();

app.get('/', (req, res) => {
    res.send({'Hello World': 'Welcome to the Node.js World!'});
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
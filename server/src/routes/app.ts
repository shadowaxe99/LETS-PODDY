import express from 'express';
import audioRoutes from './audioRoutes';
import userRoutes from './userRoutes';

const app = express();

app.use(express.json());

app.use('/audio', audioRoutes);
app.use('/user', userRoutes);

export default app;
import express from 'express';
import mongoose from 'mongoose';
import todoRoutes from './routes/todoRoutes';
import { errorHandler } from './middleware/errorHandler';
import { authenticate } from './middleware/auth';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(authenticate);
app.use('/api/todos', todoRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});
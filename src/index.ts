import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { router } from './routes/router';

// Initialize an app
const app = express();

dotenv.config();

const PORT = 3002;

// Database connection
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log('Connected to the Database');
  }
);

// Middlewares
app.use(express.json());

// Set up router
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

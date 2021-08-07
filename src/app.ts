import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { router } from './routes/router';

// Initialize an app
const app = express();
dotenv.config();

// Database connection for specified environment
if (process.env.ENVIRONMENT === 'test') {
  console.log(`Using ${process.env.ENVIRONMENT} environment. Database connection will be automatically handled there.`);
} else {
  mongoose.connect(
    process.env.DB_CONNECT,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    () => {
      console.log(`Connected to the ${process.env.ENVIRONMENT} database.`);
    }
  );
}

// Middlewares
app.use(express.json());

// Set up router
app.use('/api', router);

export { app };

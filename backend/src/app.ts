import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import { router } from './routes/router';
import { errorHandlerMiddleware } from './middlewares/error/error.middleware';

// Initialize an app
const app = express();
dotenv.config();

// Configure CORS
const corsOptions: object = {
  exposedHeaders: 'auth-token'
};

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
    (error) => {
      if (error) {
        console.error(`Cannot obtain connection to the ${process.env.ENVIRONMENT} database.`);
        console.error(error);
      } else {
        console.log(`Connected to the ${process.env.ENVIRONMENT} database.`);
      }
    }
  );
}

// Set up router with CORS
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', router);

// Middlewares
app.use(errorHandlerMiddleware);

export { app };

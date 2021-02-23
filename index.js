const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Routes
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');

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


// Route Middlewares
app.use('/api/account', authRoute);
app.use('/api/profile', profileRoute);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
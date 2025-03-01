const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

// Connect to MongoDB
const mongoURI = `mongodb+srv://ragul:ragul2025@cluster0.whdqx.mongodb.net/myDatabase?retryWrites=true&w=majority`;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((error) => console.error('❌ Database connection failed:', error));

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control', 'Expires', 'Pragma'],
        credentials: true
    })
);

app.use(cookieParser());
app.use(express.json());

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

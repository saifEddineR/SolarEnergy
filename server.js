const express = require('express');
const app = express();
app.use(express.json());
app.use('/img-uploads', express.static(__dirname + '/img-uploads'));
// setting up dotenv
require('dotenv').config({ path: './config/.env' });
// mongoose setup
const connectDB = require('./database/connectDB');
connectDB();
// cors setup
const cors = require('cors');
app.use(cors());
//routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));
app.use('/projects', require('./routes/projects'));
app.use('/products', require('./routes/products'));
app.use('/services', require('./routes/services'));
// creating server on port 5000
app.listen(process.env.PORT || 5000, console.log('connected on port ', process.env.PORT));

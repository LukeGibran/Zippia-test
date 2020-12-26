const express = require('express');

// Security
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cors = require('cors');

// Routes for the endpoints
const jobRoute = require('./routes/jobRoute');

// ENV configuration
require('dotenv').config();

// Initialize the express App
const app = express();

// Mount the routes
app.use('/api/jobs', jobRoute);

// Set Security headers
app.use(helmet());

// Prevent XSS attacks
app.use(xss());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10mins
  max: 100,
});

app.use(limiter);

// Prevent HTTP param pollution
app.use(hpp());

// Enable Cors
app.use(cors());

// Point to the React app
app.use(express.static('dist'));

const port = process.env.PORT;
app.get('/api/welcome', (req, res) => {
  res.status(200).send({ msg: 'Server Connected!' });
});

app.listen(port, () => {
  console.log(`Connected on port ${port}`);
});

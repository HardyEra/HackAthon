require('dotenv').config();  // Load environment variables only once
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// Allow requests from specific origins
app.use(cors({
  origin: 'http://localhost:3001', // Your frontend's URL
  methods: 'GET,POST,PUT,DELETE',
  credentials: true,
}));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

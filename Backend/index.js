const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const monthInPicturesRoutes = require('./routes/monthInPictures');
const pressConferencesRoutes = require('./routes/pressConferences');
const pressCoveragesRoutes = require('./routes/pressCoverages');
const pressReleasesRoutes = require('./routes/pressReleases');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/month-in-pictures', monthInPicturesRoutes);
app.use('/api/press-conferences', pressConferencesRoutes);
app.use('/api/press-coverages', pressCoveragesRoutes);
app.use('/api/press-releases', pressReleasesRoutes);

app.get('/', (req, res) => {
    res.send('DTU Studio Backend is active!');
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });
const express = require('express');
const cors = require('cors');
const songsRoute = require('./routes/songs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Static files (if using local song files served by backend; optional)
// If you're serving mp3s from frontend/public, this is not required.
// app.use('/songs', express.static(path.join(__dirname, '../../frontend/public/songs')));

app.use('/api/songs', songsRoute);

app.get('/', (req, res) => {
  res.send('Spotify Clone Backend Running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

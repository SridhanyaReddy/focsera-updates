const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const updateRoutes = require('./routes/UpdateRoutes');
const achievementRoutes = require('./routes/AchievementsRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Focsera Backend is Live!');
});

app.use('/api/updates', updateRoutes);
app.use('/api/achievements', achievementRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route Not Found' });
});

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Focsera Database Connected');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Error:', err.message);
  });

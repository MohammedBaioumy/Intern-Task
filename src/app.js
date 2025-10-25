require('dotenv').config();
const express = require('express');
const app = express();

const languageRoutes = require('./routes/languageRoutes');
const errorHandler = require('./middleware/errorHandler');
const { logRequest } = require('./utils/logger');

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: process.env.MAX_TEXT_LENGTH || '10kb' }));
app.use(logRequest);

app.use('/api', languageRoutes);

app.get('/health', (req, res) => {
    res.json({
      status: 'ok',
      uptime: process.uptime(),
      version: '1.0.0',
      timestamp: new Date().toISOString()
    });
  });

  app.use(errorHandler);

app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
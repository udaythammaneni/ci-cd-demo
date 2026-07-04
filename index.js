console.log('App running inside CI');
// const name = 'Demo';
console.log('Environment:', process.env.APP_ENV);
console.log('API_URL', process.env.API_URL);
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health Check
app.get('/', (req, res) => {
  res.json({
    message: 'Node.js server is running 🚀',
    environment: process.env.APP_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
});

// Sample API
app.get('/api/hello', (req, res) => {
  res.json({
    success: true,
    message: 'Hello from Node.js API!',
  });
});

// POST API
app.post('/api/message', (req, res) => {
  res.json({
    success: true,
    received: req.body,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

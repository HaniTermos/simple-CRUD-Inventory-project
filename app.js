const express = require('express');
const path = require('path');
require('dotenv').config();
const methodOverride = require('method-override');

// Import routes
const categoriesRoutes = require('./routes/categories');
const itemsRoutes = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true })); // For form data
app.use(express.json()); // For JSON data
app.use(express.static('public')); // Serve static files (CSS, JS, images)

app.use(methodOverride('_method'));

// Debug middleware to check method override
app.use((req, res, next) => {
  console.log('After methodOverride - Method:', req.method, 'URL:', req.url);
  next();
});

// Routes
app.use('/categories', categoriesRoutes);
app.use('/items', itemsRoutes);

// Basic route
app.get('/', (req, res) => {
  res.render('index');
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
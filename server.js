// Require modules
const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const rowsRouter = require('./routes/rows');

// Set up express app
const app = express();

// Connect to DB
require('dotenv').config();
require('./config/database');

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()  
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/rows', rowsRouter);

// Tell App to listen
app.listen(port, () => {
    console.log(`Express is listening on on port: ${port}`);
});
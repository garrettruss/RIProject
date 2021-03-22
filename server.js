const express = require('express');
const morgan = require('morgan');
const port = 3000;
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const rowsRouter = require('./routes/rows');


const app = express();

require('./config/database');


//app middleware
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

//use routes
app.use('/', indexRouter);
app.use('/rows', rowsRouter);

app.listen(port, () => {
    console.log(`Express is listening on on port: ${port}`);
});
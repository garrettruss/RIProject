
/* v2 */

// Require Database
const mongoose = require('mongoose');

//Database Connection
mongoose.connect('mongodb+srv://GarrettRuss:Riley2021@cluster0.d4qrc.mongodb.net/access?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

//Check connection
db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

/*
v3
mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DB_URL}`,
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }
);

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

*/


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rowSchema = new Schema({
    name: String,
    town: String,
    debris: String,
    description: String,
    rating: Number,
})

module.exports = mongoose.model('Row', rowSchema);

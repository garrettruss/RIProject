const mongoose = require('mongoose');
const { stringify } = require('qs');
const Schema = mongoose.Schema;


const rowSchema = new Schema({
    participant: String,
    school: String,
    name: String,
    town: String,
    debris: String,
    description: String,
    rating: Number,
    access: String,
    visitDate: Date,
})

module.exports = mongoose.model('Row', rowSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    accessible: {
        type: Boolean,
        default: true
    },

    safetyRating: {type: 
        String,
        enum: ['A', 'B', 'C', 'D', 'F']
    },
    visitDate: {
        type: Date,
        default: function() {
            return new Date().getFullYear();
    },
  },
},
   {
    timestamps: true,
  }
);


const rowSchema = new Schema({
    name: String,
    town: String,
    debris: String,
    description: String,
    rating: Number,
    reviews: [reviewSchema],
})

module.exports = mongoose.model('Row', rowSchema);

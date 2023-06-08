const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
    },
    rating:Number,
    price:Number
  
  },
);

  
  const Tour = mongoose.model('Tour',tourSchema)
  

  module.exports = Tour;
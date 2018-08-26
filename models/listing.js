'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genres = [
  'Action',
  'Adventure',
  'Comedy',
  'Romance',
  'Horror',
  'Thriller',
  'Sci-Fi',
  'Drama',
  'World',
  'Sports'
];

const sources = ['Youtube', 'HLS'];

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: '/images/listing-default.jpg'
  },
  description: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    enum: genres,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  duration: {
    type: Number
  },
  source: {
    type: String,
    enum: sources,
    default: 'Youtube'
  },
  featured: {
    type: Boolean,
    default: false
  }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;

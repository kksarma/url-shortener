const mongoose = require('mongoose');

/**
 * Url Schema
 */
const urlSchema = new mongoose.Schema({
  longUrl : {
    type: String,
    required: true
  },
  numLogs : {
    type: Number,
    required: true,
    default: 0
  }

}, { strict: false }, {timestamps: true});


module.exports = mongoose.model('Url', urlSchema);

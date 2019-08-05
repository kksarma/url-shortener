const Url = require('../models/Url');
const mongoose = require('mongoose');

const webhost = 'https://encode-url.herokuapp.com/';

function shorten(req, res) {
  if (req.body.url) {
    const longUrl = req.body.url;
    // Check if url already exists in the database
    Url.findOne({ longUrl: longUrl }).then(async (url) => {
      if (!url) {
        // Since it doesn't exist, let's go ahead and create it
        url = await Url.create({ longUrl: longUrl });
      }
      res.status(201).json({ shortUrl: `${webhost}/${url._id}` });
    });
  }
}

function decode(req, res) {
  const id = req.params.encodedId;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.redirect(webhost);
  }
  // Check if url already exists in the database
  Url.findOne({ _id: id }).then((url) => {
    if (url) {
      res.redirect(url.longUrl);
    } else {
      res.redirect(webhost);
    }
  });
}

module.exports = {
  shorten, decode,
};

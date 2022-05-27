const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost:27017/glossary');

// 2. Set up any schema and models needed by the app
let wordSchema = new mongoose.Schema({
  word: String,
  definition: String
});

//word model
let Word = mongoose.model('word', wordSchema)


// 3. Export the models

module.exports = {Word, wordSchema}

// 4. Import the models into any modules that need them





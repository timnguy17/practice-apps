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


const data = [
  {
    word: 'pizza',
    definition: 'is food',
  },
  {
    word: 'pineapple',
    definition: 'is fruit',
  },
];

//drop collection on start
Word.collection.drop(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('success');

    // seeding 1 word
    // new Word({
    //   word: 'pizza',
    //   definition: 'is food'
    // }).save()
    // .then(() => {
    //   console.log('success')
    // })
    // .catch((err) => {
    //  console.log(err)
    // })

    // seed many words from data Array, map return array of words
    const words = data.map(wordData => new Word(wordData));

    words.forEach(word => {
      word.save()
        .then(() => console.log(`successfully saved ${word.word}`))
        .catch(() => console.log(err));
    });
  }
});




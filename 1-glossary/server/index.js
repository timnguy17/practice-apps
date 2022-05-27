require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const models = require('./db.js');
// const bodyParser = require('body-parser');



// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

//other routes here

app.get('/glossary', (req, res) => {
  // find all documents
  models.Word.find({})
    .then((data) => {
      console.log(data)
      res.send(data);
    })
    .catch((err) => {
      console.log(err)
    })

  // fetch from random url
  // axios.get('random_url')
  //      .then(resp => {
  //        res.send(resp.data)
  //      })
  //      .catch(err => res.status(500).end())
});

app.delete('/delete', (req, res) => {
  console.log('delete request here', req.body)
  models.Word.deleteOne(req.body)
    .then((data) => {
      console.log('delete success: HERE IS DATA')
      res.send('success')
    })
    .catch((err) => {
      console.log('delete failed', err)
    })
});

app.post('/search', (req, res) => {
  //find specific documents
  models.Word.find({ word: req.body.word })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log('failed search', err)
    })
});

app.post('/newWords', (req, res) => {
  const word = new models.Word({ word: req.body.word, definition: req.body.definition })
  word.save()
    .then((response) => {
      res.status(200).send()
    })
    .catch((err) => {
      res.status(500).end()
    })
});

app.post('/update', (req, res) => {
  console.log('update data', req.body)
  models.Word.updateOne({_id: req.body.id}, req.body.word)
    .then((response) => {
      res.status(200).send()
    })
    .catch((err) => {
      console.log(err)
      res.status(500).end()
    })
})



let port = process.env.PORT;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${process.env.PORT}`)
});


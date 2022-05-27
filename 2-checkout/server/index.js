require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//middleware, parses incoming req with json--based on body parser
app.use(express.json());


/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/user', (req, res) => {
  db.queryAsync(`INSERT INTO users (id, name, email, password) VALUES('${req.session_id}', '${req.body.name}', '${req.body.email}', '${req.body.password}')`).then((response) =>{
    res.send();
  }).catch((err)=>{
    res.end(err)
  })
})


app.post('/address', (req, res) => {
  db.query(`INSERT INTO users (id, line1, line2, city, state, zip, phone) VALUES('${req.session_id}', '${req.body.line1}', '${req.body.line2}', '${req.body.city}', '${req.body.state}', '${req.body.zip}', ${req.body.phone}')`, (err, results) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.send(results)
    }
  })
})



app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);

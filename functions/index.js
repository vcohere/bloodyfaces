const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require('node-fetch');
const cors = require('cors');
const firebaseCredentials = require("./firebaseCredentials");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const app = express();
const main = express();

main.use('/api', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

app.use(cors())

app.get('/nft/:nftId', (req, res) => {
  // Passing req.params.nftId as a parameter could be a security issue
  db
    .collection('nfts')
    .doc(req.params.nftId)
    .get()
    .then(snapshot => {
      res.status(200).send(snapshot.data());
    })
    .catch(error => {
      res.status(400).send('Cannot get NFT : ${error}')
    });
})

app.get('/img/:nftId', (req, res) => {
  const id = parseInt(req.params.nftId);

  const baseAppUrl = 'bloodyfaces-787a9.appspot.com/';

  const imgUrl = 'https://firebasestorage.googleapis.com/v0/b/' + baseAppUrl + 'o/' + id + '.jpg?alt=media';

  fetch(imgUrl).then(actual => {
    actual.headers.forEach((v, n) => res.setHeader(n, v));
    actual.body.pipe(res);
  })
  .catch(err => {
    console.error(err);
    res.sendStatus(404);
  });
})

exports.bloodyFacesApi = functions.https.onRequest(main);

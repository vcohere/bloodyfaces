const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const firebaseCredentials = require("./firebaseCredentials");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

const app = express();
const main = express();

main.use('/api', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

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

exports.bloodyFacesApi = functions.https.onRequest(main);

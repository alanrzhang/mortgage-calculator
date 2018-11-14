const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT_NUM;
const db = require('./../database/dbMethods.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public/dist'));

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

app.get('/mortgage/home/:id/', (req, res) => {
  console.log('get hit')
  const { id } = req.params;
  db.getHouseInfo(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log('error getting house info');
    });
});

app.post('/mortgage/homes', (req, res) => {
  db.postHouseInfo(req.body)
    .then(() => {
      res.send(201);
    })
    .catch(() => {
      console.log('error posting house info');
    });
});

app.put('/mortgage/homes', (req, res) => {
  db.updateHouseInfo(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log('error update housing prices');
    });
});

app.delete('mortgage/homes', (req, res) => {
  const { id } = req.body;
  db.deleteHouseInfo(id)
    .then(() => {
      res.send(202);
    })
    .catch(() => {
      console.log('error deleting data');
    });
});

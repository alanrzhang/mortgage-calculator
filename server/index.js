const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const port = process.env.PORT_NUM;
const db = require('./../database/dbMethods.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public/dist'));

app.listen(port, () => {
  console.log(`listening at ${port}`);
});

app.get('/api/homes/:id/prices', (req, res) => {
  const { id } = req.params;
  db.getHomeInfo(id)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log('error getting house info');
    });
});

app.post('/api/homes/prices', (req, res) => {
  db.postHouseInfo(req.body)
    .then(() => {
      res.send(201);
    })
    .catch(() => {
      console.log('error posting house info');
    });
});

app.put('/api/homes/prices', (req, res) => {
  db.updateHouseInfo(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      console.log('error update housing prices');
    });
});

app.delete('api/homes/:id/prices', (req, res) => {
  const { id } = req.params;
  db.deleteHouseInfo(id)
    .then(() => {
      res.send(202);
    })
    .catch('error deleting data');
});

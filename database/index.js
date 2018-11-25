// const mysql = require('mysql');
const mongoose = require('mongoose');
require('dotenv').config();

// mySQL connection

// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
// });

// connection.connect((err) => {
//   if (err) {
//     console.log('error connecting to db');
//   } else {
//     console.log('db successfully connected');
//   }
// });

// mongoose

mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);

const mortgageSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  address: String,
  home_price: Number,
  property_tax: Number,
  home_insurance: Number,
  hoa_dues: Number,
}, { collection: 'mortgage' });

mongoose.model('mortgage', mortgageSchema);

const db = mongoose.model('mortgage');
module.exports = db;

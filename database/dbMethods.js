const Promise = require('bluebird');
const db = require('./index.js');

// const retrieve = (id, callback) => {
//   const sql = `SELECT * FROM mortgage where id=${id}`;
//   db.query(sql, (err, data) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       callback(null, data);
//     }
//   });
// };


// am i doing this promise right?
const getHouseInfo = function (id) {
  const queryString = `SELET * FROM mortgage where id=${id}`;
  return Promise.promisify(db.query(queryString));
};

const postHouseInfo = function (data) {
  const { id, home_price, property_tax, home_insurance, hoa_dues } = data;
  const queryString = `INSERT INTO ${process.env.TABLE_NAME} VALUES (${id}, ${home_price}, ${property_tax}, ${home_insurance}, ${hoa_dues})`;
  return Promise.promisify(db.query(queryString));
};

const updateHouseInfo = function (data) {
  const { id, home_price, property_tax, home_insurance, hoa_dues } = data;
  const info = [id, home_price, property_tax, home_insurance, hoa_dues];
  const queryString = `UPDATE ${process.env.TABLE_NAME} SET home_price=${home_price},property_tax=${property_tax}, home_insurance=${home_insurance}, hoa_dues=${hoa_dues}WHERE id=${id}`;
  return Promise.promisify(db.query(queryString))
};

const deleteHouseInfo = function (id) {
  const queryString = `DELETE FROM ${process.env.TABLE_NAME} WHERE id=${id}`;
  return Promise.promisify(db.query(queryString);)
};

module.exports = {
  getHouseInfo,
  postHouseInfo,
  updateHouseInfo,
  deleteHouseInfo,
};

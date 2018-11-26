const Promise = require('bluebird');
const db = require('./index.js');
// require('dotenv').config();

// old mySQL

// const mysqlQueryPromise = Promise.promisify(db.query, { context: db });

// const getHouseInfo = function (id) {
//   const queryString = `SELECT * FROM ${process.env.TABLE_NAME} where id=${id}`;
//   return mysqlQueryPromise(queryString);
// };

// const postHouseInfo = function (data) {
//   const { id, home_price, property_tax, home_insurance, hoa_dues } = data;
//   const queryString = `INSERT INTO ${process.env.TABLE_NAME} VALUES (${id}, ${home_price}, ${property_tax}, ${home_insurance}, ${hoa_dues})`;
//   return mysqlQueryPromise(queryString);
// };

// const updateHouseInfo = function (data) {
//   const { id, home_price, property_tax, home_insurance, hoa_dues } = data;
//   const queryString = `UPDATE ${process.env.TABLE_NAME} SET home_price=${home_price},property_tax=${property_tax}, home_insurance=${home_insurance}, hoa_dues=${hoa_dues}WHERE id=${id}`;
//   return mysqlQueryPromise(queryString);
// };

// const deleteHouseInfo = function (id) {
//   const queryString = `DELETE FROM ${process.env.TABLE_NAME} WHERE id=${id}`;
//   return mysqlQueryPromise(queryString);
// };

// mongo

const getHouseInfo = function (id) {
  const query = db.find({ id });
  return query.exec();
};

const getHouseInfoAddress = function (address) {
  const query = db.find({ address });
  return query.exec();
};

const postHouseInfo = function (data) {
  const entry = new db(data);
  return entry.save();
};

const updateHouseInfo = function (data) {
  const findAndUpdatePromise = Promise.promisify(db.findOneAndUpdate, { context: db });
  return findAndUpdatePromise({ id: data.id }, data);
};

const deleteHouseInfo = function (id) {
  const findAndDeletePromise = Promise.promisify(db.findOneAndDelete, { context: db });
  return findAndDeletePromise({ id });
};

module.exports = {
  getHouseInfo,
  postHouseInfo,
  updateHouseInfo,
  deleteHouseInfo,
  getHouseInfoAddress,
};

const Promise = require('bluebird');
const db = require('./index.js');

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

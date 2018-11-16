const faker = require('faker');
const moment = require('moment');
const json2csv = require('json2csv').parse;
const fs = require('fs');
require('dotenv').config();

const streetNames = new Set();
faker.seed(123);
while (streetNames.size < 1000) {
  streetNames.add(faker.address.streetName());
}
const streetArray = Array.from(streetNames);
fs.writeFileSync('./database/data.csv', `"id", "address", "home_price", "property_tax, "home_insurance", "hoa_dues"`);
const seedData = function (streets) {
  const startTime = moment().valueOf() * 1000;
  streets.forEach((val, index) => {
    console.log(`generating data for street name: ${index + 1}`);
    const data = [];
    for (let i = 1; i <= 10000; i += 1) {
      const dataObject = {
        id: i + (10000 * index),
        address: i + ' ' + val,
        home_price: faker.random.number({ min: 200000, max: 1500000 }),
        property_tax: faker.random.number({ min: 1000, max: 5000 }),
        home_insurance: faker.random.number({ min: 400, max: 1000 }),
        hoa_dues: faker.random.number({ min: 100, max: 500 }),
      };
      data.push(dataObject);
    }
    const csv = json2csv(data, { header: false });
    fs.appendFileSync('./database/data.csv', '\n' + csv);
  });
  const endTime = moment().valueOf() * 1000;
  console.log(`Data generation took ${endTime - startTime} seconds`);
};

seedData(streetArray);

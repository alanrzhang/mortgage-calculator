const faker = require('faker');
const moment = require('moment');
const fs = require('fs');

const getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min));
};

const streetNames = new Set();
faker.seed(123);
while (streetNames.size < 1000) {
  streetNames.add(faker.address.streetName());
}

const streetArray = Array.from(streetNames);

const seedData = function (streets) {
  fs.writeFileSync('./database/data.csv','id,address,home_price,property_tax,home_insurance,hoa_dues');
  const startTime = moment().valueOf() / 1000;
  streets.forEach((val, index) => {
    console.log(`generating data for street name: ${index + 1}`);
    let csv = '';
    for (let i = 1; i <= 10000; i += 1) {
      const stringEntry = `\n${i + (10000 * index)},${i + ' ' + val}, ${getRandomNumber(200000, 1500000)}, ${getRandomNumber(1000, 5000)},${getRandomNumber(400, 1000)},${getRandomNumber(100, 500)}`;
      csv += stringEntry;
    }
    fs.appendFileSync('./database/data.csv', csv);
  });
  const endTime = moment().valueOf() / 1000;
  console.log(`Data generation took ${endTime - startTime} seconds`);
};

seedData(streetArray);

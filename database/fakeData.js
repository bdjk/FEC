const faker = require('faker');
// const Item = require('./model.js');
const fs = require('fs');
const time = require('performance-now');
const stream = fs.createWriteStream('data.tsv', null, 4);
const start = time();

const header = `name\tpicture\tcost\tabout\trating\tindex\n`;
function writeWayTooManyTimes(stream, i, increment, cb) {
  do {
    i--;
    let product = faker.commerce.productName();
    let endpoint = product.split(' ');
    let result = `${product}\thttps://loremflickr.com/386/436/${
      endpoint[endpoint.length - 1]
    }\t${faker.finance.amount()}\t${faker.lorem.words()}\t${Math.ceil(
      Math.random() * 5
    )}\t${i}\n`;

    if (i === 0) {
      stream.write(result, cb());
      stream.end();
      // end = time();
    } else {
      stream.write(result);
    }
    if (i % 1000000 === 0 && i !== 0) {
      console.log('hi from ', i);
      setTimeout(() => {
        writeWayTooManyTimes(stream, i, increment + 0.0001, cb);
      }, increment * 500);
    }
  } while (i % 1000000 !== 0);
}
writeWayTooManyTimes(stream, 10000000, 1, () => {
  console.log('I guess we are done ');
});
// let i = 10000000;
// function writeWayTooManyTimes(cb) {
//   let ok = true;
//   do {
//     i--;
//     let product = faker.commerce.productName();
//     let endpoint = product.split(' ');
//     let result = `${product}\thttps://loremflickr.com/386/436/${
//       endpoint[endpoint.length - 1]
//     }\t${faker.finance.amount()}\t${faker.lorem.words()}\t${Math.ceil(
//       Math.random() * 5
//     )}\t${i}\n`;
//     if (i % 1000000 === 0) {
//       console.log(`hit ${i},000,000`);
//     }
//     if (i === 0) {
//       stream.write(result, cb());
//       stream.end();
//       // end = time();
//     } else {
//       ok = stream.write(result);
//     }
//   } while (i > 0 && ok);
//   if (i > 0) {
//     stream.once('drain', () => {
//       writeWayTooManyTimes(() => {
//         console.log('I guess we are done ');
//       });
//     });
//   }
// }
// writeWayTooManyTimes(() => {
//   console.log('I guess we are done ');
// });
stream.on('finish', (err, results) => {
  if (err) {
    console.log(`couldn't right fake data: ${err}`);
  } else {
    let end = time();
    console.log(`data finished took ${(end - start) / 1000} seconds`);
  }
});

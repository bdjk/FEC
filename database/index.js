// const mongoose = require('mongoose');
// mongoose.connect(
//   'mongodb://localhost:27017/mydb',
//   { poolSize: 10 }
// );

// const db = mongoose.connection;

// db.on('error', console.log.bind(console, '<===MONGOOSE ERROR===>'));
// db.once('open', () => {
//   console.log('<===MONGOOSE CONNECTED===>');
//   // db.Item.find({ Index: 30004 });
// });

// module.exports = db;

const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect(
  'mongodb://54.219.126.202:27017',
  (err, _db) => {
    if (err) {
      console.log('something bad happened', err);
    } else {
      db = _db.db('mydb');
      console.log('looks like the db connected');
    }
  }
);
const getDb = () => {
  // console.log('inside of the get', db.db('mydb'));
  return db;
};
module.exports = getDb;

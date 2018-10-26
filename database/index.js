const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect(
  'mongodb://54.67.47.222:27017',
  (err, _db) => {
    if (err) {
      console.log('something bad happened', err);
    } else {
      db = _db.db('mydb');
      console.log('looks like the db connected');
    }
  }
);
const getDb = () => db;
module.exports = getDb;

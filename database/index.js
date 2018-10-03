const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');

const db = mongoose.connection;

db.on('error', console.log.bind(console, '<===MONGOOSE ERROR===>'));
db.once('open', () => {
  console.log('<===MONGOOSE CONNECTED===>');
  // db.Item.find({ Index: 30004 });
});

module.exports = db;

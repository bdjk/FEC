const express = require('express');
const path = require('path');
const parser = require('body-parser');
const routes = require('./routes.js');
const PORT = 7777;
const cors = require('cors');
const app = express();

app.use(parser.json());

app.use(parser.urlencoded({ extended: !0 }));

app.use(cors());

app.use(express.static(path.resolve(__dirname, '../static')));

app.use('/api', routes);

app.listen(7777, () => {
  console.log('listening on 7777...');
});

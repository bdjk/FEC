const express = require('express');
const path = require('path');
const parser = require('body-parser');
const PORT = 9999; 
const cors = require('cors');

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../static')));
app.use(cors);


app.listen(PORT, () => {
    console.log(`ALL SERVERS CONNECTED ON ${PORT}.`);
})
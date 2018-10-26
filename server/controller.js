const db = require('../database/index.js'),
  Item = db(),
  c = [
    'Bacon',
    'Computer',
    'Gloves',
    'Hat',
    'Car',
    'Computer',
    'Towels',
    'Car',
    'Bacon',
    'Chips',
    'Sausages',
    'Pants',
    'Fish',
    'Fish',
    'Computer',
    'Bike',
    'Hat',
    'Salad',
    'Keyboard',
    'Fish',
    'Salad',
    'Hat',
    'Hat',
    'Chair',
    'Shoes',
    'Tuna',
    'Computer',
    'Sausages',
    'Tuna',
    'Shirt',
    'Fish',
    'Chicken',
    'Tuna',
    'Fish',
    'Gloves',
    'Chicken',
    'Shirt',
    'Cheese',
    'Pizza',
    'Car',
    'Pants',
    'Shoes',
    'Fish',
    'Chicken',
    'Chicken',
    'Hat',
    'Ball',
    'Fish',
    'Soap',
    'Hat',
    'Shirt',
    'Table',
    'Chair',
    'Chicken',
    'Table',
    'Keyboard',
    'Towels',
    'Ball',
    'Soap',
    'Chips',
    'Bacon',
    'Tuna',
    'Table',
    'Chicken',
    'Towels',
    'Car',
    'Bacon',
    'Soap',
    'Chips',
    'Towels',
    'Bike',
    'Car',
    'Chicken',
    'Sausages',
    'Tuna',
    'Computer',
    'Keyboard',
    'Mouse',
    'Bacon',
    'Shoes',
    'Towels',
    'Chips',
    'Sausages',
    'Car',
    'Pizza',
    'Pizza',
    'Fish',
    'Tuna',
    'Chair',
    'Soap',
    'Shoes',
    'Cheese',
    'Bike',
    'Bacon',
    'Shoes',
    'Computer',
    'Towels',
    'Table',
    'Chicken',
    'Computer'
  ];
module.exports = {
  get: (req, res) => {
    let Item;
    db()
      .collection('Items')
      .find({ category: c[Math.floor(100 * Math.random())] })
      .limit(15)
      .toArray()
      .then(d => {
        console.log(d), res.status(200).send(d);
      })
      .catch(err => {
        console.log('error inside the big one', err);
      });
  },
  post: (req, res) => {
    new Item({ name: req.body.postmanName })
      .save()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.log('ERR', err)),
      console.log('post');
  }
};

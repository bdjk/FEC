// const Item = require('../database/model.js');
const db = require('../database/index.js');
const app = require('./index.js');
const Item = db();
// console.log('this is db', db);

// module.exports = {
//   get: (req, res) => {
//     // let Item = db();
//     console.log('get', Item);
//     // console.log(`{ index: ${Math.floor(Math.random() * 10000000)}}`);
//     // Item.find()
//     //   .limit(2)
//     //   .then(data => console.log(data[0]));
//     Item.find({ index: Math.floor(Math.random() * 10000000) })
//       .then(data => {
//         console.log('how about deez dubs', data[0].category);
//         Item.find({ category: data[0].category })
//           .limit(15)
//           .then(data => {
//             // console.log(
//             //   data[3].name,
//             //   '\n',
//             //   data[3].picture,
//             //   '\n',
//             //   data[3].cost,
//             //   '\n',
//             //   data[3].about,
//             //   '\n',
//             //   data[3].rating,
//             //   '\n',
//             //   data[3].category,
//             //   '\n',
//             //   data[3].index,
//             //   '\n',
//             //   data[3]
//             // );
//             res.status(200).send(data);
//           })
//           .catch(err => {
//             console.log('error inside the big one', err);
//           });
//       })
//       .catch(err => console.log(err));
//   },
//   post: (req, res) => {
//     new Item({
//       name: req.body.postmanName
//     })
//       .save()
//       .then(data => {
//         res.status(201).send(data);
//       })
//       .catch(err => console.log('ERR', err));
//     console.log('post');
//   }
// };
module.exports = {
  get: (req, res) => {
    let Item = db();
    // console.log('get', Item);
    // console.log(`{ index: ${Math.floor(Math.random() * 10000000)}}`);
    Item.collection('Items')
      .find({ index: Math.floor(Math.random() * 10000000) })
      .toArray()
      .then(data => {
        console.log('how about deez dubs', data[0].category);
        Item.collection('Items')
          .find({ category: data[0].category })
          .limit(15)
          .toArray()
          .then(data => {
            console.log(data[0]);
            res.status(200).send(data);
          })
          .catch(err => {
            console.log('error inside the big one', err);
          });
      })
      .catch(err => console.log(err));
  },
  post: (req, res) => {
    new Item({
      name: req.body.postmanName
    })
      .save()
      .then(data => {
        res.status(201).send(data);
      })
      .catch(err => console.log('ERR', err));
    console.log('post');
  }
};

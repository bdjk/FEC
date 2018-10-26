const router = require('express').Router();
const controller = require('./controller.js');

module.exports = router
  .route('/mydb')
  .get(controller.get)
  .post(controller.post);

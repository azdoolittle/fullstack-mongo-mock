// Controller here
// complete building out the controller
var dbHelper = require('../db/dbhelpers.js');
var Product = require('../db/');

const controller = {
  get: (req, res) => {
    dbHelper.getProductsHelper((err, docs) => {
      if (err) {
        console.err('ctrl get helper:', err);
      }
      res.status(200).send(docs);
    })
  },
  post: (req, res) => {},
  put: (req, res) => {},
  delete: (req, res) => {}
}

module.exports = controller
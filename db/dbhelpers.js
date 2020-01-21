var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: (callback) => {
    Product.find(callback)
    console.log('db getProdHelper cb:', callback);
  },
  postProductsHelper: () => {},
  updateProductHelper: () => {},
  deleteProductHelper: () => {}
};

module.exports = helpers
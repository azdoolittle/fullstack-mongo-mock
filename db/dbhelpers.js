var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: (callback) => {
    Product.find(callback)
    console.log('db getProdHelper results:');
  },
  postProductsHelper: () => {},
  updateProductHelper: () => {},
  deleteProductHelper: () => {}
};

module.exports = helpers
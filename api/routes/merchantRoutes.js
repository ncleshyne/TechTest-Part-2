'use strict';
module.exports = function(app) {
  var merchant = require('../controllers/merchantController');

  // merchant Routes
  app.route('/api/merchants')
    .get(merchant.list_all_merchants)
    .post(merchant.create_a_merchant);


  app.route('/api/merchants/:merchantId')
    .get(merchant.read_a_merchant)
    .put(merchant.update_a_merchant)
    .delete(merchant.delete_a_merchant);
};

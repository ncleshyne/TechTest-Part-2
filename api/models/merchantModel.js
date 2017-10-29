'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MerchantSchema = new Schema({
  display_name: String,
  registered_name: String,
  email: String,
  phone: String,
  web_url: String,
  merchant_id: { type: Number, default: 1 },
  address: {
    country: String,
    state: String,
    postcode: String,
    suburb: String,
    address2: String,
    address1: String
  },
  date_modified: { type: Date, default: Date.now },
  date_created: { type: Date, default: Date.now },
  status: { type: String, default: "active" },
  logo: String
});

module.exports = mongoose.model('Merchants', MerchantSchema);

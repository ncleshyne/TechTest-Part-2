'use strict';


var mongoose = require('mongoose'),
  Merchant = mongoose.model('Merchants');

exports.list_all_merchants = function(req, res) {
  Merchant.find({}, function(err, merchant) {
    if (err)
      res.send(err);
    res.json(merchant);
  });
};




exports.create_a_merchant = function(req, res) {
  var new_merchant = new Merchant(req.body);
  new_merchant.save(function(err, merchant) {
    if (err)
      res.send(err);
    res.json(merchant);
  });
};


exports.read_a_merchant = function(req, res) {
  Merchant.findById(req.params.merchantId, function(err, merchant) {
    if (err)
      res.send(err);
    res.json(merchant);
  });
};


exports.update_a_merchant = function(req, res) {
  Merchant.findOneAndUpdate({_id: req.params.merchantId}, req.body, {new: true}, function(err, merchant) {
    if (err)
      res.send(err);
    res.json(merchant);
  });
};


exports.delete_a_merchant = function(req, res) {


  Merchant.remove({
    _id: req.params.merchantId
  }, function(err, merchant) {
    if (err)
      res.send(err);
    res.json({ message: 'Merchant successfully deleted' });
  });
};

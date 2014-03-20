// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to add and remove coupon codes for a shopping cart.
*/
function CheckoutCartCoupon() {
  this.prefix = 'cart_coupon.';
}
util.inherits(CheckoutCartCoupon, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a coupon code for a shopping cart (quote). The shopping cart must not be empty.
  */
  add: {
    mandatory: 'quoteId,couponCode',
    optional: 'storeView'
  },

  /**
    Allows you to remove a coupon code from a shopping cart (quote).
  */
  remove: {
    mandatory: 'quoteId',
    optional: 'storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CheckoutCartCoupon.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CheckoutCartCoupon;

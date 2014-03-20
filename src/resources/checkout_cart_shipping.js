// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage products in a shopping cart.
*/
function CheckoutCartShipping() {
  this.prefix = 'cart_shipping.';
}
util.inherits(CheckoutCartShipping, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve the list of available shipping methods for a shopping cart (quote).
  */
  list: {
    mandatory: 'quoteId',
    optional: 'storeView'
  },

  /**
    Allows you to set a shipping method for a shopping cart (quote).
  */
  method: {
    mandatory: 'quoteId,shippingMethod',
    optional: 'storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CheckoutCartShipping.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CheckoutCartShipping;

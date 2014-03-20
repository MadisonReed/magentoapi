// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to add customer information and addresses into a shopping cart.
*/
function CheckoutCartCustomer() {
  this.prefix = 'cart_customer.';
}
util.inherits(CheckoutCartCustomer, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to set the customer addresses in the shopping cart (quote).
  */
  addresses: {
    mandatory: 'quoteId,customerAddressData',
    optional: 'store',
    modifiers: {
      customerAddressData: ensureArray
    }
  },

  /**
    Allows you to add information about the customer to a shopping cart (quote).
  */
  set: {
    mandatory: 'quoteId,customerData',
    optional: 'storeView',
    modifiers: {
      // customerData: ensureArray
    }
  }
};

function ensureArray(val) {
  if (!Array.isArray(val)) {
    return [ val ];
  }

  return val;
}

// creating prototypes using curry func
for (var key in protos) {
  CheckoutCartCustomer.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CheckoutCartCustomer;

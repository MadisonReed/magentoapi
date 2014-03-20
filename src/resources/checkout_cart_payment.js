// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve and set payment methods for a shopping cart.
*/
function CheckoutCartPayment() {
  this.prefix = 'cart_payment.';
}
util.inherits(CheckoutCartPayment, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve a list of available payment methods for a shopping cart (quote).
  */
  list: {
    mandatory: 'quoteId',
    optional: 'storeView'
  },

  /**
    Allows you to set a payment method for a shopping cart (quote).
  */
  method: {
    mandatory: 'quoteId,paymentData',
    optional: 'store',
    modifiers: {
      // to do: verify all array'ized
      /* paymentData: function(data) {
        // if data is not an array, wrap it in an array
        if (!Array.isArray(data)) {
          return [ data ];
        }

        return data;
      } */
    }
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CheckoutCartPayment.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CheckoutCartPayment;

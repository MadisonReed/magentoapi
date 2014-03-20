// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage shopping carts.
*/
function CheckoutCart() {
  this.prefix = 'cart.';
}
util.inherits(CheckoutCart, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to create an empty shopping cart.
  */
  create: {
    optional: 'storeView'
  },

  /**
    Allows you to retrieve full information about the shopping cart (quote).
  */
  info: {
    mandatory: 'quoteId',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve the website license agreement for the quote according to the website (store).
  */
  license: {
    mandatory: 'quoteId',
    optional: 'storeView'
  },

  /**
    Allows you to create an order from a shopping cart (quote).
    Before placing the order, you need to add the customer, customer address, shipping and payment methods.
  */
  order: {
    mandatory: 'quoteId',
    optional: 'storeView,agreements'
  },

  /**
    Allows you to retrieve total prices for a shopping cart (quote).
  */
  totals: {
    mandatory: 'quoteId',
    optional: 'storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CheckoutCart.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CheckoutCart;

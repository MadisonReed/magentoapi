// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage products in a shopping cart.
*/
function CheckoutCartProduct() {
  this.prefix = 'cart_product.';
}
util.inherits(CheckoutCartProduct, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add one or more products to the shopping cart (quote).
  */
  add: {
    mandatory: 'quoteId,products',
    optional: 'storeView',
    modifiers: {
      products: ensureArray
    }
  },

  /**
    Allows you to retrieve the list of products in the shopping cart (quote).
  */
  list: {
    mandatory: 'quoteId',
    optional: 'storeView'
  },

  /**
    Allows you to move products from the current quote to a customer quote.
  */
  moveToCustomerQuote: {
    mandatory: 'quoteId,productsData',
    optional: 'storeView',
    modifiers: {
      productsData: ensureArray
    }
  },

  /**
    Allows you to remove one or several products from a shopping cart (quote).
  */
  remove: {
    mandatory: 'quoteId,productsData',
    optional: 'storeView',
    modifiers: {
      productsData: ensureArray
    }
  },

  /**
    Allows you to update one or several products in the shopping cart (quote).
  */
  update: {
    mandatory: 'quoteId,productsData',
    optional: 'storeView',
    modifiers: {
      productsData: ensureArray
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
  CheckoutCartProduct.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CheckoutCartProduct;

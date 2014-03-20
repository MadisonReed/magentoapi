// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage invoices.
*/
function SalesOrderInvoice() {
  this.prefix = 'order_invoice.';
}
util.inherits(SalesOrderInvoice, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new comment to the order invoice.
  */
  addComment: {
    mandatory: 'invoiceIncrementId',
    optional: 'comment,email,includeComment'
  },

  /**
    Allows you to cancel the required invoice.
    Note that not all order invoices can be canceled.
    Only some payment methods support canceling the order invoice (e.g., Google Checkout, PayPal Pro, PayPal Express Checkout).
  */
  cancel: {
    mandatory: 'invoiceIncrementId'
  },

  /**
    Allows you to capture the required invoice.
    Note that not all order invoices can be captured.
    Only some payment methods support capturing the order invoice (e.g., PayPal Pro).
  */
  capture: {
    mandatory: 'invoiceIncrementId'
  },

  /**
    Allows you to create a new invoice for an order.
  */
  create: {
    mandatory: 'orderIncrementId,itemsQty',
    optional: 'comment,email,includeComment'
  },

  /**
    Allows you to retrieve information about the required invoice.
  */
  info: {
    mandatory: 'invoiceIncrementId'
  },

  /**
    Allows you to retrieve the list of order invoices. Additional filters can also be applied.
  */
  list: {
    optional: 'filters',
    modifiers: {
      filters: function(filters) {
        // if filters is not an array, wrap it in an array
        if (!Array.isArray(filters)) {
          return [ filters ];
        }

        return filters;
      }
    }
  }
};

// creating prototypes using curry func
for (var key in protos) {
  SalesOrderInvoice.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = SalesOrderInvoice;

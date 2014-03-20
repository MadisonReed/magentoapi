// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to operate with credit memos for orders.
*/
function SalesOrderCreditMemo() {
  this.prefix = 'order_creditmemo.';
}
util.inherits(SalesOrderCreditMemo, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new comment to an existing credit memo. Email notification can be sent to the user email.
  */
  addComment: {
    mandatory: 'creditmemoIncrementId',
    optional: 'comment,notifyCustomer,includeComment'
  },

  /**
    Allows you to cancel an existing credit memo.
  */
  cancel: {
    mandatory: 'creditmemoIncrementId'
  },

  /**
    Allows you to create a new credit memo for the invoiced order.
    Comments can be added and an email notification can be sent to the user email.
  */
  create: {
    mandatory: 'orderIncrementId',
    optional: 'creditmemoData,comment,notifyCustomer,includeComment,refundToStoreCreditAmount'
  },

  /**
    Allows you to retrieve full information about the specified credit memo.
  */
  info: {
    mandatory: 'creditmemoIncrementId'
  },

  /**
    Allows you to retrieve the list of orders. Additional filters can be applied.
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
  SalesOrderCreditMemo.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = SalesOrderCreditMemo;

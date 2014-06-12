// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage orders.
*/
function SalesOrder() {
  this.prefix = 'sales_order.';
}
util.inherits(SalesOrder, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new comment to the order.
  */
  addComment: {
    mandatory: 'orderIncrementId,status',
    optional: 'comment,notify'
  },

  /**
    Allows you to cancel the required order.
  */
  cancel: {
    mandatory: 'orderIncrementId'
  },

  /**
    Allows you to place the required order on hold.
  */
  hold: {
    mandatory: 'orderIncrementId'
  },

  /**
    Allows you to retrieve the required order information.
  */
  info: {
    mandatory: 'orderIncrementId'
  },

  /**
    Allows you to retrieve the list of orders. Additional filters can be applied.
  */
  list: {
    optional: 'filters'
  },

  /**
    Allows you to unhold the required order.
  */
  unhold: {
    mandatory: 'orderIncrementId'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  SalesOrder.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = SalesOrder;

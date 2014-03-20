// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to create, retrieve, update, and delete data about customers.
*/
function Customer() {
  this.prefix = 'customer.';
}
util.inherits(Customer, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Create a new customer.
  */
  create: {
    mandatory: 'customerData',
    modifiers: {
      // to do: figure out why this was causing an issue
      // customerData: ensureArray
    }
  },

  /**
    Delete the required customer.
  */
  'delete': {
    mandatory: 'customerId'
  },

  /**
    Retrieve information about the specified customer.
  */
  info: {
    mandatory: 'customerId',
    optional: 'attributes',
    modifiers: {
      attributes: ensureArray
    }
  },

  /**
    Allows you to retrieve the list of customers.
  */
  list: {
    optional: 'filters',
    modifiers: {
      // filters: ensureArray
    }
  },

  /**
    Update information about the required customer.
    Note that you need to pass only those arguments which you want to be updated.
  */
  update: {
    mandatory: 'customerId,customerData',
    modifiers: {
      //customerData: ensureArray
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
  Customer.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Customer;

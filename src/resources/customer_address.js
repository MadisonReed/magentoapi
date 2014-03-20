// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to create, retrieve, update, and delete address data for a required customer.
*/
function CustomerAddress() {
  this.prefix = 'customer_address.';
}
util.inherits(CustomerAddress, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Create a new address for the customer.
  */
  create: {
    mandatory: 'customerId,addressData',
    modifiers: {
      // to do: verify all ensureArray usecases
      // addressData: ensureArray
    }
  },

  /**
    Delete the required customer address.
  */
  'delete': {
    mandatory: 'addressId'
  },

  /**
    Retrieve information about the required customer address.
  */
  info: {
    mandatory: 'addressId'
  },

  /**
    Retrieve the list of customer addresses.
  */
  list: {
    mandatory: 'customerId'
  },

  /**
    Update address data of the required customer
  */
  update: {
    mandatory: 'addressId,addressData',
    modifiers: {
      addressData: ensureArray
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
  CustomerAddress.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CustomerAddress;

// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function CustomerGroup() {
  this.prefix = 'customer_group.';
}
util.inherits(CustomerGroup, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Retrieve the list of customer groups.
  */
  list: true
};

// creating prototypes using curry func
for (var key in protos) {
  CustomerGroup.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CustomerGroup;

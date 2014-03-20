// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function Store() {
  this.prefix = 'store.';
}
util.inherits(Store, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve information about the required store view.
  */
  info: {
    mandatory: 'storeView'
  },

  /**
    Allows you to retrieve the list of store views.
  */
  list: true
};

// creating prototypes using curry func
for (var key in protos) {
  Store.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Store;

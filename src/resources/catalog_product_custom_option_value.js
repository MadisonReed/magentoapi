// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function CatalogProductCustomOptionValue() {
  this.prefix = 'product_custom_option_value.';
}
util.inherits(CatalogProductCustomOptionValue, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new custom option value to a custom option.
    Note that the custom option value can be added only to the option with the Select Input Type.
  */
  add: {
    mandatory: 'optionId,data',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve full information about the specified product custom option value.
  */
  info: {
    mandatory: 'valueId',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve the list of product custom option values.
    Note that the method is available only for the option Select Input Type.
  */
  list: {
    mandatory: 'optionId',
    optional: 'storeView'
  },

  /**
    Allows you to remove the custom option value from a product.
  */
  remove: {
    mandatory: 'valueId'
  },

  /**
    Allows you to update the product custom option value.
  */
  update: {
    mandatory: 'valueId,data',
    optional: 'storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductCustomOptionValue.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductCustomOptionValue;

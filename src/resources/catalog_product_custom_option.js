// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function CatalogProductCustomOption() {
  this.prefix = 'product_custom_option.';
}
util.inherits(CatalogProductCustomOption, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new custom option for a product.
  */
  add: {
    mandatory: 'productId,data',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve full information about the custom option in a product.
  */
  info: {
    mandatory: 'optionId',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve the list of custom options for a specific product.
  */
  list: {
    mandatory: 'productId',
    optional: 'storeView'
  },

  /**
    Allows you to remove a custom option from the product.
  */
  remove: {
    mandatory: 'optionId'
  },

  /**
    Allows you to retrieve the list of available custom option types.
  */
  types: true,

  /**
    Allows you to update the required product custom option.
  */
  update: {
    mandatory: 'optionId,data',
    optional: 'storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductCustomOption.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductCustomOption;

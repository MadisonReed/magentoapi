// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve product types.
*/
function CatalogProductType() {
  this.prefix = 'catalog_product_type.';
}
util.inherits(CatalogProductType, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve the list of product types.
  */
  list: true
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductType.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductType;

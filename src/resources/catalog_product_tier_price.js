// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve and update product tier prices.
*/
function CatalogProductTierPrice() {
  this.prefix = 'catalog_product_attribute_tier_price.';
}
util.inherits(CatalogProductTierPrice, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve information about product tier prices.
  */
  info: {
    mandatory: 'product'
  },

  /**
    Allows you to update the product tier prices.
  */
  update: {
    mandatory: 'product,tierPrices'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductTierPrice.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductTierPrice;

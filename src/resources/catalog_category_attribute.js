// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve the list of category attributes and options
*/
function CatalogCategoryAttribute() {
  this.prefix = 'catalog_category_attribute.';
}
util.inherits(CatalogCategoryAttribute, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to set/get the current store view.
  */
  currentStore: {
    mandatory: 'storeView'
  },

  /**
    Allows you to retrieve the list of category attributes.
  */
  list: true,

  /**
    Allows you to retrieve the attribute options.
  */
  options: {
    mandatory: 'attributeId,storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogCategoryAttribute.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogCategoryAttribute;

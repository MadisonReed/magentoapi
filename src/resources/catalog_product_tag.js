// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function CatalogProductTag() {
  this.prefix = 'catalog_product_tag.';
}
util.inherits(CatalogProductTag, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add one or more tags to a product.
  */
  add: {
    mandatory: 'data'
  },

  /**
    Allows you to retrieve information about the required product tag.
  */
  info: {
    mandatory: 'tagId,storeView'
  },

  /**
    Allows you to retrieve the list of tags for a specific product.
  */
  list: {
    mandatory: 'productId,storeView'
  },

  /**
    Allows you to remove an existing product tag.
  */
  remove: {
    mandatory: 'tagId'
  },

  /**
    Allows you to update information about an existing product tag.
  */
  update: {
    mandatory: 'tagId,data',
    optional: 'storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductTag.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductTag;

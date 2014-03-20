// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage links for products, including related, cross-sells, up-sells, and grouped.
*/
function CatalogProductLink() {
  this.prefix = 'catalog_product_link.';
}
util.inherits(CatalogProductLink, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to assign a product link (related, cross-sell, up-sell, or grouped) to another product.
  */
  assign: {
    mandatory: 'type,product,linkedProduct,data'
  },

  /**
    Allows you to retrieve the product link type attributes.
  */
  attributes: {
    mandatory: 'type'
  },

  /**
    Allows you to retrieve the list of linked products for a specific product.
  */
  list: {
    mandatory: 'type,product'
  },

  /**
    Allows you to remove the product link from a specific product.
  */
  remove: {
    mandatory: 'type,product,linkedProduct'
  },

  /**
    Allows you to retrieve the list of product link types.
  */
  types: true,

  /**
    Allows you to update the product link.
  */
  update: {
    mandatory: 'type,product,linkedProduct,data'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductLink.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductLink;

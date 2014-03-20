// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage product images.
*/
function CatalogProductAttributeMedia() {
  this.prefix = 'catalog_product_attribute_media.';
}
util.inherits(CatalogProductAttributeMedia, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to upload a new product image.
  */
  create: {
    mandatory: 'product,data',
    optional: 'storeView'
  },

  /**
    Allows you to set/get the current store view.
  */
  currentStore: {
    optional: 'storeView'
  },

  /**
    Allows you to retrieve information about the specified product image.
  */
  info: {
    mandatory: 'info,file',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve the list of product images.
  */
  list: {
    mandatory: 'product',
    optional: 'storeView'
  },

  /**
    Allows you to remove the image from a product.
  */
  remove: {
    mandatory: 'product,file'
  },

  /**
    Allows you to retrieve product image types including standard image, small_image, thumbnail, etc.
    Note that if the product attribute set contains attributes of the Media Image type (Catalog Input Type for Store Owner > Media Image),
    it will also be returned in the response.
  */
  types: {
    mandatory: 'setId'
  },

  /**
    Allows you to update the product image.
  */
  update: {
    mandatory: 'product,file,data,storeView'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductAttributeMedia.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductAttributeMedia;

// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage products.
*/
function CatalogProduct() {
  this.prefix = 'catalog_product.';
}
util.inherits(CatalogProduct, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to create a new product and return ID of the created product.
  */
  create: {
    mandatory: 'type,set,sku,data'
  },

  /**
    Allows you to set/get the current store view.
  */
  currentStore: {
    optional: 'view'
  },

  /**
    Allows you to delete the required product.
  */
  'delete': {
    mandatory: 'id'
  },

  /**
    Allows you to get the product special price data.
  */
  getSpecialPrice: {
    mandatory: 'id'
  },

  /**
    Allows you to retrieve information about the required product.
  */
  info: {
    mandatory: 'id',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve the list of products.
  */
  list: {
     optional: 'filters'
  },

  /**
    Get the list of additional attributes. Additional attributes are attributes that are not in the default set of attributes.
  */
  listOfAdditionalAttributes: {
    mandatory: 'prodType,attributeSetId'
  },

  /**
    Allows you to set the product special price.
  */
  setSpecialPrice: {
    mandatory: 'id,specialPrice,from,to',
    optional: 'storeView',
    modifiers: {
      from: dateToISO8601Time,
      to: dateToISO8601Time
    }
  },

  /**
    Allows you to update the required product. Note that you should specify only those parameters which you want to be updated.
  */
  update: {
    mandatory: 'id,data',
    optional: 'storeView'
  }
};

// function to turn a native date object into something like '2013-07-08 23:57:28'
var iso8601Match = /^(\d{4}-\d{2}-\d{2})T(\d{2}:\d{2}:\d{2}).*$/;
function dateToISO8601Time(d) {
  return d.toISOString().replace(iso8601Match, '$1 $2');
}

// creating prototypes using curry func
for (var key in protos) {
  CatalogProduct.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProduct;

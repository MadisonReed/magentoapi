// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve category attributes and options.
*/
function CatalogProductAttribute() {
  this.prefix = 'product_attribute.';
}
util.inherits(CatalogProductAttribute, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new option for attributes with selectable fields.
  */
  addOption: {
    mandatory: 'attribute,data'
  },

  /**
    Allows you to create a new product attribute.
  */
  create: {
    mandatory: 'data'
  },

  /**
    Allows you to set/get the current store view.
  */
  currentStore: {
    optional: 'storeView'
  },

  /**
    Allows you to get full information about a required attribute with the list of options.
  */
  info: {
    mandatory: 'attribute'
  },

  /**
    Allows you to retrieve the list of product attributes.
  */
  list: {
    mandatory: 'setId'
  },

  /**
    Allows you to retrieve the product attribute options.
  */
  options: {
    mandatory: 'attributeId',
    optional: 'storeView'
  },

  /**
    Allows you to remove the required attribute from a product.
  */
  remove: {
    mandatory: 'attribute'
  },

  /**
    Allows you to remove the option for an attribute.
  */
  removeOption: {
    mandatory: 'attribute,optionId'
  },

  /**
    Allows you to retrieve the list of possible attribute types.
  */
  types: true,

  /**
    Allows you to update the required attribute.
  */
  update: {
    mandatory: 'attribute,data'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductAttribute.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductAttribute;

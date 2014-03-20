// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve product attribute sets.
*/
function CatalogProductAttributeSet() {
  this.prefix = 'catalog_product_attribute_set.';
}
util.inherits(CatalogProductAttributeSet, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add an existing attribute to an attribute set.
  */
  attributeAdd: {
    mandatory: 'attributeId,attributeSetId',
    optional: 'attributeGroupId,sortOrder'
  },

  /**
    Allows you to remove an existing attribute from an attribute set.
  */
  attributeRemove: {
    mandatory: 'attributeId,attributeSetId'
  },

  /**
    Allows you to create a new attribute set based on another attribute set.
  */
  create: {
    mandatory: 'attributeSetName,skeletonSetId'
  },

  /**
    Allows you to add a new group for attributes to the attribute set.
  */
  groupAdd: {
    mandatory: 'attributeSetId,groupName'
  },

  /**
    Allows you to remove a group from an attribute set.
  */
  groupRemove: {
    mandatory: 'attributeGroupId'
  },

  /**
    Allows you to rename a group in the attribute set.
  */
  groupRename: {
    mandatory: 'groupId,groupName'
  },

  /**
    Allows you to retrieve the list of product attribute sets.
  */
  list: true,

  /**
    Allows you to remove an existing attribute set.
  */
  remove: {
    mandatory: 'attributeSetId',
    optional: 'forceProductsRemove'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductAttributeSet.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductAttributeSet;

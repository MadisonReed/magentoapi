// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage categories and how products are assigned to categories.
*/
function CatalogCategory() {
  this.prefix = 'catalog_category.';
}
util.inherits(CatalogCategory, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Retrieve the list of products assigned to a required category.
  */
  assignedProducts: {
    mandatory: 'categoryId'
  },

  /**
    Create a new category and return its ID.
  */
  assignProduct: {
    mandatory: 'categoryId,product',
    optional: 'position'
  },

  /**
    Create a new category and return its ID.
  */
  create: {
    mandatory: 'categoryId,data',
    optional: 'storeView'
  },

  /**
    Allows you to set/get the current store view.
  */
  currentStore: {
    mandatory: 'storeView'
  },

  /**
    Allows you to delete the required category.
  */
  'delete': {
    mandatory: 'categoryId'
  },

  /**
    Allows you to retrieve information about the required category.
  */
  info: {
    mandatory: 'categoryId',
    optional: 'storeView,attributes'
  },

  /**
    Allows you to retrieve one level of categories by a website, a store view, or a parent category.
  */
  level: {
    optional: 'website,storeView,parentCategory'
  },

  /**
    Allows you to move the required category in the category tree.
  */
  move: {
    mandatory: 'categoryId,parentId',
    optional: 'afterId'
  },

  /**
    Allows you to remove the product assignment from the category.
  */
  removeProduct: {
    mandatory: 'categoryId,productId'
  },

  /**
    Allows you to retrieve the hierarchical tree of categories.
  */
  tree: {
    optional: 'parentId,storeView'
  },

  /**
    Update the required category. Note that you should specify only those parameters which you want to be updated.
  */
  update: {
    mandatory: 'categoryId,categoryData',
    optional: 'storeView'
  },

  /**
    Allows you to update the product assigned to a category. The product position is updated.
  */
  updateProduct: {
    mandatory: 'categoryId,productId',
    optional: 'position'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogCategory.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogCategory;

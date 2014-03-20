// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to retrieve and update the stock data.
*/
function CatalogInventoryStockItem() {
  this.prefix = 'cataloginventory_stock_item.';
}
util.inherits(CatalogInventoryStockItem, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve the list of stock data by product IDs.
  */
  list: {
    mandatory: 'products',
    modifiers: {
      products: function(products) {
        // if a single product, wrap it in an array
        if (!Array.isArray(products)) {
          return [ products ];
        }

        return products;
      }
    }
  },

  /**
    Allows you to update the required product stock data.
  */
  update: {
    mandatory: 'product,data'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogInventoryStockItem.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogInventoryStockItem;

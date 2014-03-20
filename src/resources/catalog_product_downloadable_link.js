// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function CatalogProductDownloadableLink() {
  this.prefix = 'product_downloadable_link.';
}
util.inherits(CatalogProductDownloadableLink, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new link to a downloadable product.
  */
  add: {
    mandatory: 'productId,resource,resourceType',
    optional: 'storeView'
  },

  /**
    Allows you to retrieve a list of links of a downloadable product.
  */
  list: {
    mandatory: 'productId',
    optional: 'storeView'
  },

  /**
    Allows you to remove a link/sample from a downloadable product.
  */
  remove: {
    mandatory: 'linkId'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  CatalogProductDownloadableLink.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = CatalogProductDownloadableLink;

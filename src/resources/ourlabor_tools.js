// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage products.
*/
function OurlaborTools() {
  this.prefix = 'ourlabor_tools.';
}
util.inherits(OurlaborTools, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to link simple products with a configurable product,
    set the configurable attributes and prices.
  */
  configurable_create_for_reals: {
    mandatory: 'productId,attributes,variants',
    optional: 'identifierType'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  OurlaborTools.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = OurlaborTools;

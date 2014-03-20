// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to get information about the current Magento installation.
*/
function Core() {
  this.prefix = 'core_magento.';
}
util.inherits(Core, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to retrieve information about Magento version and edition.
  */
  info: true
};

// creating prototypes using curry func
for (var key in protos) {
  Core.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = Core;

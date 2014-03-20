// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function DirectoryRegion() {
  this.prefix = 'directory_region.';
}
util.inherits(DirectoryRegion, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Retrieve the list of countries from Magento.
  */
  list: {
    mandatory: 'country'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  DirectoryRegion.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = DirectoryRegion;

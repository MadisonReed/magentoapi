// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

function DirectoryCountry() {
  this.prefix = 'directory_country.';
}
util.inherits(DirectoryCountry, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Retrieve the list of countries from Magento.
  */
  list: true
};

// creating prototypes using curry func
for (var key in protos) {
  DirectoryCountry.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = DirectoryCountry;

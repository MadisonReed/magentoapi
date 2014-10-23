// external dependencies
var events = require('events');
var util = require('util');

// internal dependencies
var prototypeBase = require('../prototype_base.js');
var curry = require('../curry.js');

/**
  Allows you to manage shipments and tracking numbers.
*/
function SalesOrderShipment() {
  this.prefix = 'sales_order_shipment.';
}
util.inherits(SalesOrderShipment, events.EventEmitter);


// prototypes we will be applying
var protos = {
  /**
    Allows you to add a new comment to the order shipment.
  */
  addComment: {
    mandatory: 'shipmentIncrementId',
    optional: 'comment,email,includeInEmail'
  },

  /**
    Allows you to add a new tracking number to the order shipment.
  */
  addTrack: {
    mandatory: 'shipmentIncrementId,carrier,title,trackNumber'
  },

  /**
    Allows you to create a new shipment for an order.
  */
  create: {
    mandatory: 'orderIncrementId',
    optional: 'itemsQty,comment,email,includeComment'
  },

  /**
    Allows you to retrieve the list of allowed carriers for an order.
  */
  getCarriers: {
    mandatory: 'orderIncrementId'
  },

  /**
    Allows you to retrieve the shipment information.
  */
  info: {
    mandatory: 'shipmentIncrementId'
  },

  /**
    Allows you to retrieve the list of order shipments. Additional filters can be applied.
  */
  list: {
    mandatory: 'filters'
  },

  /**
    Allows you to remove a tracking number from the order shipment.
  */
  removeTrack: {
    mandatory: 'shipmentIncrementId,trackId'
  }
};

// creating prototypes using curry func
for (var key in protos) {
  SalesOrderShipment.prototype[key] = curry(prototypeBase, key, protos[key]);
}
protos = undefined;

module.exports = SalesOrderShipment;

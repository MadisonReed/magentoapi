// external dependencies
var xmlrpc = require('xmlrpc');
var events = require('events');
var util = require('util');

// internal dependencies
var MagentoError = require('./error.js');

// globals
var slice = Array.prototype.slice;
var resources = {
  catalogCategory: './resources/catalog_category.js',
  catalogCategoryAttribute: './resources/catalog_category_attribute.js',
  catalogProduct: './resources/catalog_product.js',
  catalogProductAttribute: './resources/catalog_product_attribute.js',
  catalogProductAttributeMedia: './resources/catalog_product_attribute_media.js',
  catalogProductAttributeSet: './resources/catalog_product_attribute_set.js',
  catalogProductCustomOption: './resources/catalog_product_custom_option.js',
  catalogProductCustomOptionValue: './resources/catalog_product_custom_option_value.js',
  catalogProductDownloadableLink: './resources/catalog_product_downloadable_link.js',
  catalogProductLink: './resources/catalog_product_link.js',
  catalogProductTag: './resources/catalog_product_tag.js',
  catalogProductTierPrice: './resources/catalog_product_tier_price.js',
  catalogProductType: './resources/catalog_product_type.js',
  catalogInventoryStockItem: './resources/catalogInventory_stock_item.js',
  checkoutCart: './resources/checkout_cart.js',
  checkoutCartCoupon: './resources/checkout_cart_coupon.js',
  checkoutCartCustomer: './resources/checkout_cart_customer.js',
  checkoutCartPayment: './resources/checkout_cart_payment.js',
  checkoutCartProduct: './resources/checkout_cart_product.js',
  checkoutCartShipping: './resources/checkout_cart_shipping.js',
  core: './resources/core.js',
  customer: './resources/customer.js',
  customerAddress: './resources/customer_address.js',
  customerGroup: './resources/customer_group.js',
  directoryCountry: './resources/directory_country.js',
  directoryRegion: './resources/directory_region.js',
  salesOrder: './resources/sales_order.js',
  salesOrderCreditMemo: './resources/sales_order_credit_memo.js',
  salesOrderInvoice: './resources/sales_order_invoice.js',
  salesOrderShipment: './resources/sales_order_shipment.js',
  store: './resources/store.js'
};
var mandatory = {};
var configDefaults = {
  host: mandatory,
  port: 80,
  path: mandatory,
  login: mandatory,
  pass: mandatory,
  parallelLimit: Infinity
};

/**
  Constructor method

  @param {Object} config Configuration for magento soap api
  @param {String} config.path API path, most likely '/api/xmlrpc/'
  @param {Number} [config.port] API port, defaults to 80
  @param {String} config.host Host for API
  @param {Number} [config.parallelLimit] How many requests to make in parallel, defaults to Infinity
  @param {String} config.login Login username
  @param {String} config.pass Login password
*/
function Magento(config) {
  var self = this;
  var magentoConfig = {};
  var key;

  // validating config & setting up config object
  for (key in configDefaults) {
    if (configDefaults[key] === mandatory && !config[key]) {
      throw new MagentoError('Mandatory config attribute, ' + key + ', not set');
    } else {
      magentoConfig[key] = config[key] !== undefined ? config[key] : configDefaults[key];
    }
  }

  this.config = magentoConfig;
  this.client = xmlrpc.createClient(this.config);
  this.queue = [];
  this.queue.running = 0;
  this.queue.parallelLimit = this.config.parallelLimit;

  // initializing resources
  for (key in resources) {
    this[key] = new (require(resources[key]))();

    // 'method' listener, for making a request
    this[key].on('method', function() {
      var args = slice.call(arguments);
      args[0] = this.prefix ? this.prefix + args[0] : args[0];
      self.method.apply(self, args);
    }.bind(this[key]));

    // error listener
    this[key].on('error', function(err, callback) {
      err.resource = this.prefix;
      callback(err);
    });
  }

  this.sessionId = null;
  this.prevSessionId = null;

  return this;
}
util.inherits(Magento, events.EventEmitter);

Magento.prototype.method = function(method, args /* = optional arr */, callback) {
  var self = this;
  var callArr;

  if (arguments.length < 2 || arguments.length > 3) {
    throw new MagentoError('Wrong arguments passed to Magento.method');
  }

  callArr = [ this.sessionId, method ];

  if (arguments.length === 2) {
    callback = args,
    args = undefined;
  } else {
    if (!Array.isArray(args)) {
      args = [ args ];
    }
    callArr.push(args);
  }

  // queueing
  return this.queueMethod(method, callArr, callback);
};

Magento.prototype.queueMethod = function() {
  this.queue.push(slice.call(arguments));
  return this.processQueue();
};

Magento.prototype.processQueue = function() {
  var current;

  while (
    this.queue.running < this.queue.parallelLimit &&
    (current = this.queue.shift()) &&
    ++this.queue.running
  ) {
    this.methodApply.apply(this, current);
  }

  return this;
};

Magento.prototype.methodApply = function(method, callArr, callback) {
  var self = this;

  this.client.methodCall('call', callArr, function(err) {
    --self.queue.running;
    self.processQueue();

    if (err) {
      callback(new MagentoError(err.faultString ? err.faultString : 'An error occurred while calling ' + method, err));
      return;
    }

    callback.apply(self, arguments);
  });

  return this;
};

Magento.prototype.login = function(callback) {
  var self = this;

  this.client.methodCall('login', [ this.config.login, this.config.pass ], function(err, sessId) {
    if (err) {
      callback(new MagentoError('An error occurred at login', err));
      return;
    }

    self.sessionId = sessId;
    callback(null, sessId);
  });

  return this;
};

Magento.prototype.changeSession = function(sessId) {
  this.prevSessId = this.sessionId;
  this.sessionId = sessId;

  return this;
};

module.exports = Magento;

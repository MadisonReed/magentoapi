# Magento SOAP API Wrapper

This wrapper lets you talk to Magento via SOAP.

## Installation

`npm install magento`

## Usage

```js
var MagentoAPI = require('magento');
var magento = new MagentoAPI({
  host: 'your.host',
  port: 80,
  path: '/api/xmlrpc/',
  login: 'your_username',
  pass: 'your_pass'
});

magento.login(function(err, sessId) {
  if (err) {
    // deal with error
    return;
  }

  // use magento
});
```

If need be, you can manually change the session id.

```js
magento.changeSession(newSessionId);
```

All of the API methods take an object of params as the first argument, and a callback as the second.

Or, if no params are sent, just a callback as the first argument.

## Methods

+ [Catalog Category](./readmes/catalog_category.md)
+ [Catalog Category Attribute](./readmes/catalog_category_attribute.md)
+ [Catalog Product](./readmes/catalog_product.md)
+ [Catalog Product Attribute](./readmes/catalog_product_attribute.md)
+ [Catalog Product Attribute Media](./readmes/catalog_product_attribute_media.md)
+ [Catalog Product Attribute Set](./readmes/catalog_product_attribute_set.md)
+ [Catalog Product Custom Option](./readmes/catalog_product_custom_option.md)
+ [Catalog Product Custom Option Value](./readmes/catalog_product_custom_option_value.md)
+ [Catalog Product Downloadable Link](./readmes/catalog_product_downloadable_link.md)
+ [Catalog Product Link](./readmes/catalog_product_link.md)
+ [Catalog Product Tag](./readmes/catalog_product_tag.md)
+ [Catalog Product Tier Price](./readmes/catalog_product_tier_price.md)
+ [Catalog Product Type](./readmes/catalog_product_type.md)
+ [Catalog Inventory Stock Item](./readmes/catalogInventory_stock_item.md)
+ [Checkout Cart](./readmes/checkout_cart.md)
+ [Checkout Cart Coupon](./readmes/checkout_cart_coupon.md)
+ [Checkout Cart Customer](./readmes/checkout_cart_customer.md)
+ [Checkout Cart Payment](./readmes/checkout_cart_payment.md)
+ [Checkout Cart Product](./readmes/checkout_cart_product.md)
+ [Checkout Cart Shipping](./readmes/checkout_cart_shipping.md)
+ [Core](./readmes/core.md)
+ [Customer](./readmes/customer.md)
+ [Customer Address](./readmes/customer_address.md)
+ [Customer Group](./readmes/customer_group.md)
+ [Directory Country](./readmes/directory_country.md)
+ [Directory Region](./readmes/directory_region.md)
+ [Sales Order](./readmes/sales_order.md)
+ [Sales Order Credit Memo](./readmes/sales_order_credit_memo.md)
+ [Sales Order Invoice](./readmes/sales_order_invoice.md)
+ [Sales Order Shipment](./readmes/sales_order_shipment.md)
+ [Store](./readmes/store.md)
# Checkout Cart Shipping

## [list](http://www.magentocommerce.com/api/soap/checkout/cartShipping/cart_shipping.list.html)

Allows you to retrieve the list of available shipping methods for a shopping cart (quote).

```js
magento.checkoutCartShipping.list({
  quoteId:    val,
  storeView:  val  /* optional */
}, callback);
```

## [method](http://www.magentocommerce.com/api/soap/checkout/cartShipping/cart_shipping.method.html)

Allows you to set a shipping method for a shopping cart (quote).

```js
magento.checkoutCartShipping.method({
  quoteId:        val,
  shippingMethod: val,
  storeView:      val  /* optional */
}, callback);
```
# Checkout Cart Payment

## [list](http://www.magentocommerce.com/api/soap/checkout/cartPayment/cart_payment.list.html)

Allows you to retrieve a list of available payment methods for a shopping cart (quote).

```js
magento.checkoutCartPayment.list({
  quoteId:    val,
  storeView:  val  /* optional */
}, callback);
```

## [method](http://www.magentocommerce.com/api/soap/checkout/cartPayment/cart_payment.method.html)

Allows you to set a payment method for a shopping cart (quote).

`data` is an array of shoppingCartPaymentMethodEntity objects.

```js
magento.checkoutCartPayment.method({
  quoteId:      val,
  paymentData:  [ val, val, val ],
  storeView:    val  /* optional */
}, callback);

// or a single cell of payment data

magento.checkoutCartPayment.method({
  quoteId:      val,
  paymentData:  val,
  storeView:    val  /* optional */
}, callback);
```
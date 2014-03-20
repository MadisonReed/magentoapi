# Checkout Cart Coupon

## [add](http://www.magentocommerce.com/api/soap/checkout/cartCoupon/cart_coupon.add.html)

```js
magento.checkoutCartCoupon.add({
  quoteId:    val,
  couponCode: val,
  storeView:  val   /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/checkout/cartCoupon/cart_coupon.remove.html)

```js
magento.checkoutCartCoupon.remove({
  quoteId:    val,
  storeView:  val   /* optional */
}, callback);
```
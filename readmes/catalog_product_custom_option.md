# Catalog Product Custom Option

## [add](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOption/product_custom_option.add.html)

Allows you to add a new custom option for a product.

`data` is a catalogProductCustomOptionToAdd object.

```js
magento.catalogProductCustomOption.add({
  productId:  val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOption/product_custom_option.info.html)

Allows you to retrieve full information about the custom option in a product.

```js
magento.catalogProductCustomOption.info({
  optionId:   val,
  storeView:  val   /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOption/product_custom_option.list.html)

Allows you to retrieve the list of custom options for a specific product.

```js
magento.catalogProductCustomOption.list({
  productId:  val,
  storeView:  val   /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOption/product_custom_option.remove.html)

Allows you to remove a custom option from the product.

```js
magento.catalogProductCustomOption.remove({
  optionId: val
}, callback);
```

## [types](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOption/product_custom_option.types.html)

Allows you to retrieve the list of available custom option types.

```js
magento.catalogProductCustomOption.types(callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOption/product_custom_option.update.html)

Allows you to update the required product custom option.

`data` is a catalogProductCustomOptionToUpdate object.

```js
magento.catalogProductCustomOption.update({
  optionId:   val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```
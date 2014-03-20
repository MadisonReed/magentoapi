# Catalog Product Custom Option Value

## [add](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOptionValue/product_custom_option_value.add.html)

Allows you to add a new custom option value to a custom option.

Note that the custom option value can be added only to the option with the Select Input Type.

`data` is a catalogProductCustomOptionValueAdd object.

```js
magento.catalogProductCustomOptionValue.add({
  optionId:   val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOptionValue/product_custom_option_value.info.html)

Allows you to retrieve full information about the specified product custom option value.

```js
magento.catalogProductCustomOptionValue.info({
  valueId:    val,
  storeView:  val   /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOptionValue/product_custom_option_value.list.html)

Allows you to retrieve the list of product custom option values.

Note that the method is available only for the option Select Input Type.

```js
magento.catalogProductCustomOptionValue.list({
  optionId:   val,
  storeView:  val   /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOptionValue/product_custom_option_value.remove.html)

Allows you to remove the custom option value from a product.

```js
magento.catalogProductCustomOptionValue.remove({
  valueId: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductCustomOptionValue/product_custom_option_value.update.html)

Allows you to update the product custom option value.

`data` is a catalogProductCustomOptionValueUpdateEntity object.

```js
magento.catalogProductCustomOptionValue.update({
  valueId:    val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```
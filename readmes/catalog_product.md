# Catalog Product

## [create](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.create.html)

Allows you to create a new product and return ID of the created product.

`data` is a catalogProductCreateEntity object.

```js
magento.catalogProduct.create({
  type: val,
  set:  val,
  sku:  val,
  data: val
}, callback);
```

## [currentStore](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.currentStore.html)

Allows you to set/get the current store view.

```js
magento.catalogProduct.currentStore(callback);

// or

magento.catalogProduct.currentStore({
  view: val   /* optional */
}, callback);
```

## [delete](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.delete.html)

Allows you to delete the required product.

```js
magento.catalogProduct.delete({
  id: val
}, callback);
```

## [getSpecialPrice](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.getSpecialPrice.html)

Allows you to get the product special price data.

```js
magento.catalogProduct.getSpecialPrice({
  id: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.info.html)

Allows you to retrieve information about the required product.

```js
magento.catalogProduct.info({
  id: val,
  view: val   /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.list.html)

Allows you to retrieve the list of products.

```js
magento.catalogProduct.list(callback);
```
//or

```js
magento.catalogProduct.listOfAdditionalAttributes({
  filters:       val /* optional */
}, callback);
```
filter examples

```js
 {'type': {'in':  'simple'}}
```

```js
 {'created_at': {'from':  '2011-07-06 01:01:01'}}
```


## [listOfAdditionalAttributes](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.listOfAdditionalAttributes.html)

Get the list of additional attributes.

Additional attributes are attributes that are not in the default set of attributes.

```js
magento.catalogProduct.listOfAdditionalAttributes({
  prodType:       val,
  attributeSetId: val
}, callback);
```

## [setSpecialPrice](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.setSpecialPrice.html)

Allows you to set the product special price.

`from` and `to` should be native JavaScript date objects.

```js
magento.catalogProduct.setSpecialPrice({
  id:           val,
  specialPrice: val,
  from:         val,
  to:           val,
  storeView:    val    /* optional */
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProduct/catalog_product.update.html)

Allows you to update the required product. Note that you should specify only those parameters which you want to be updated.

`data` is a catalogProductCreateEntity object.

```js
magento.catalogProduct.update({
  id:         val,
  data:       val,
  storeView:  val    /* optional */
}, callback);
```
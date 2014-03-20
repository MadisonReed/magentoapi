# Catalog Product Attribute Media

## [create](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.create.html)

Allows you to upload a new product image.

`data` is a catalogProductAttributeMediaCreateEntity object.

```js
magento.catalogProductAttributeMedia.create({
  product:    val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```

## [currentStore](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.currentStore.html)

Allows you to set/get the current store view.

```js
magento.catalogProductAttributeMedia.currentStore(callback);

// or

magento.catalogProductAttributeMedia.currentStore({
  storeView: val    /* optional */
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.info.html)

Allows you to retrieve information about the specified product image.

```js
magento.catalogProductAttributeMedia.info({
  info:       val,
  file:       val,
  storeView:  val   /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.list.html)

Allows you to retrieve the list of product images.

```js
magento.catalogProductAttributeMedia.list({
  product:    val,
  storeView:  val   /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.remove.html)

Allows you to remove the image from a product.

```js
magento.catalogProductAttributeMedia.remove({
  product:  val,
  file:     val
}, callback);
```

## [types](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.types.html)

Allows you to retrieve product image types including standard image, small_image, thumbnail, etc.

Note that if the product attribute set contains attributes of the Media Image type (Catalog Input Type for Store Owner > Media Image),
it will also be returned in the response.

```js
magento.catalogProductAttributeMedia.types({
  setId: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeMedia/catalog_product_attribute_media.update.html)

Allows you to update the product image.

```js
magento.catalogProductAttributeMedia.update({
  product:    val,
  file:       val,
  data:       val,
  storeView:  val
}, callback);
```
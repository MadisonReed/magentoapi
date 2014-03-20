# Catalog Product Tag

## [add](http://www.magentocommerce.com/api/soap/catalog/catalogProductTag/product_tag.add.html)

Allows you to add one or more tags to a product.

`data` is a catalogProductTagAddEntity object

```js
magento.catalogProductTag.add({
  data: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProductTag/product_tag.info.html)

Allows you to retrieve information about the required product tag.

```js
magento.catalogProductTag.info({
  tagId:      val,
  storeView:  val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductTag/product_tag.list.html)

Allows you to retrieve the list of tags for a specific product.

```js
magento.catalogProductTag.list({
  productId:  val,
  storeView:  val
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductTag/product_tag.remove.html)

Allows you to remove an existing product tag.

```js
magento.catalogProductTag.remove({
  tagId: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductTag/product_tag.update.html)

Allows you to update information about an existing product tag.

`data` is a catalogProductTagUpdateEntity object.

```js
magento.catalogProductTag.update({
  tagId:      val,
  data:       val,
  storeView:  val   /* optional */
}, callback);
```
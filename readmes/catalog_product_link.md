# Catalog Product Link

## [assign](http://www.magentocommerce.com/api/soap/catalog/catalogProductLink/catalog_product_link.assign.html)

Allows you to assign a product link (related, cross-sell, up-sell, or grouped) to another product.

`data` is a catalogProductLinkEntity object.

```js
magento.catalogProductLink.assign({
  type:           val,
  product:        val,
  linkedProduct:  val,
  data:           val
}, callback);
```

## [attributes](http://www.magentocommerce.com/api/soap/catalog/catalogProductLink/catalog_product_link.attributes.html)

Allows you to retrieve the product link type attributes.

```js
magento.catalogProductLink.attributes({
  type: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductLink/catalog_product_link.list.html)

Allows you to retrieve the list of linked products for a specific product.

```js
magento.catalogProductLink.list({
  type:     val,
  product:  val
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductLink/catalog_product_link.remove.html)

Allows you to remove the product link from a specific product.

```js
magento.catalogProductLink.remove({
  type:           val,
  product:        val,
  linkedProduct:  val
}, callback);
```

## [types](http://www.magentocommerce.com/api/soap/catalog/catalogProductLink/catalog_product_link.types.html)

Allows you to retrieve the list of product link types.

```js
magento.catalogProductLink.types(callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductLink/catalog_product_link.update.html)

Allows you to update the product link.

`data` is a catalogProductLinkEntity object.

```js
magento.catalogProductLink.update({
  type:           val,
  product:        val,
  linkedProduct:  val,
  data:           val
}, callback);
```
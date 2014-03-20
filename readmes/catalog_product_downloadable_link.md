# Catalog Product Downloadable Link

## [add](http://www.magentocommerce.com/api/soap/catalog/catalogProductDownloadableLink/product_downloadable_link.add.html)

Allows you to add a new link to a downloadable product.

`resource` is a catalogProductDownloadableLinkAddEntity object.

```js
magento.catalogProductDownloadableLink.add({
  productId:    val,
  resource:     val,
  resourceType: val
  storeView:    val   /* optional */
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductDownloadableLink/product_downloadable_link.list.html)

Allows you to retrieve a list of links of a downloadable product.

```js
magento.catalogProductDownloadableLink.list({
  productId:  val,
  storeView:  val   /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductDownloadableLink/product_downloadable_link.remove.html)

Allows you to remove a link/sample from a downloadable product.

```js
magento.catalogProductDownloadableLink.remove({
  linkId: val
}, callback);
```
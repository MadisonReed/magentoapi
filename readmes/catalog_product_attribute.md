# Catalog Product Attribute

## [addOption](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.addOption.html)

Allows you to add a new option for attributes with selectable fields.

`data` is a catalogProductAttributeOptionEntityToAdd object.

```js
magento.catalogProductAttribute.addOption({
  attribute:  val,
  data:       val
}, callback);
```

## [create](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.create.html)

Allows you to create a new product attribute.

`data` is a catalogProductAttributeEntityToCreate object.

```js
magento.catalogProductAttribute.create({
  data: val
}, callback);
```

## [currentStore](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.currentStore.html)

Allows you to set/get the current store view.
    
```js
magento.catalogProductAttribute.currentStore(callback);

// or

magento.catalogProductAttribute.currentStore({
  storeView: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.info.html)

Allows you to get full information about a required attribute with the list of options.

```js
magento.catalogProductAttribute.info({
  attribute: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.list.html)

Allows you to retrieve the list of product attributes.

```js
magento.catalogProductAttribute.list({
  setId: val
}, callback);
```

## [options](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.options.html)

Allows you to retrieve the product attribute options.

```js
magento.catalogProductAttribute.options({
  attributeId:  val,
  storeView:    val   /* optional */
}, callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.remove.html)

Allows you to remove the required attribute from a product.

    magento.catalogProductAttribute.remove({
      attribute: val
    }, callback);

## [removeOption](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.removeOption.html)

Allows you to remove the option for an attribute.

```js
magento.catalogProductAttribute.removeOption({
  attribute:  val,
  optionId:   val
}, callback);
```

## [types](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.types.html)

Allows you to retrieve the list of possible attribute types.

```js
magento.catalogProductAttribute.types(callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttribute/product_attribute.update.html)

Allows you to update the required attribute.

`data` is a catalogProductAttributeEntityToUpdate object.

```js
magento.catalogProductAttribute.update({
  attribute:  val,
  data:       val
}, callback);
```
# Catalog Product Attribute Set

## [attributeAdd](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.attributeAdd.html)

Allows you to add an existing attribute to an attribute set.

```js
magento.catalogProductAttributeSet.attributeAdd({
  attributeId:      val,
  attributeSetId:   val,
  attributeGroupId: val,  /* optional */
  sortOrder:        val   /* optional */
}, callback);
```

## [attributeRemove](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.attributeRemove.html)

Allows you to remove an existing attribute from an attribute set.

```js
magento.catalogProductAttributeSet.attributeRemove({
  attributeId:    val,
  attributeSetId: val
}, callback);
```

## [create](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.create.html)

Allows you to create a new attribute set based on another attribute set.

```js
magento.catalogProductAttributeSet.create({
  attributeSetName: val,
  skeletonSetId:    val
}, callback);
```

## [groupAdd](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.groupAdd.html)

Allows you to add a new group for attributes to the attribute set.

```js
magento.catalogProductAttributeSet.groupAdd({
  attributeSetId: val,
  groupName:      val
}, callback);
```

## [groupRemove](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.groupRemove.html)

Allows you to remove a group from an attribute set.

```js
magento.catalogProductAttributeSet.groupRemove({
  attributeGroupId: val
}, callback);
```

## [groupRename](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.groupRename.html)

Allows you to rename a group in the attribute set.

```js
magento.catalogProductAttributeSet.groupRename({
  groupId:    val,
  groupName:  val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.list.html)

Allows you to retrieve the list of product attribute sets.

```js
magento.catalogProductAttributeSet.list(callback);
```

## [remove](http://www.magentocommerce.com/api/soap/catalog/catalogProductAttributeSet/product_attribute_set.remove.html)

Allows you to remove an existing attribute set.

```js
magento.catalogProductAttributeSet.remove({
  attributeSetId:       val,
  forceProductsRemove:  val   /* optional */
}, callback);
```
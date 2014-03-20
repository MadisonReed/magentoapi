# Catalog Inventory Stock Item

## [list](http://www.magentocommerce.com/api/soap/catalogInventory/cataloginventory_stock_item.list.html)

Allows you to retrieve the list of stock data by product IDs.

```js
magento.catalogInventoryStockItem.list({
  products: [ val, val, val ]
}, callback);

// or a single product

magento.catalogInventoryStockItem.list({
  products: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/catalogInventory/cataloginventory_stock_item.update.html)

Allows you to update the required product stock data.

`data` is a catalogInventoryStockItemUpdateEntity object.

```js
magento.catalogInventoryStockItem.update({
  product: val,
  data: val
}, callback);
```
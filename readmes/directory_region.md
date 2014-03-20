# Directory Region

## [list](http://www.magentocommerce.com/api/soap/directory/directory_region.list.html)

Retrieve the list of countries from Magento.

`country` must be the country code in IOS 2 or ISO 3 (e.g. US or USA).

```js
magento.directoryRegion.list({
  country: val,
}, callback);
```
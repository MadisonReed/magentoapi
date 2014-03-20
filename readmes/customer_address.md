# Customer

## [create](http://www.magentocommerce.com/api/soap/customer/customerAddress/customer_address.create.html)

Create a new address for the customer.

`addressData` is an array of customerAddressEntityCreate objects.

```js
magento.customerAddress.create({
  customerId:   val,
  addressData:  [ val, val, val ]
}, callback);

// or a single cell of address data

magento.customerAddress.create({
  customerId:   val,
  addressData:  val
}, callback);
```

## [delete](http://www.magentocommerce.com/api/soap/customer/customerAddress/customer_address.delete.html)

Delete the required customer address.

```js
magento.customerAddress.delete({
  addressId: val
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/customer/customerAddress/customer_address.info.html)

Retrieve information about the required customer address.

```js
magento.customerAddress.info({
  addressId: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/customer/customerAddress/customer_address.list.html)

Retrieve the list of customer addresses.

```js
magento.customerAddress.list({
  customerId: val
}, callback);
```

## [update](http://www.magentocommerce.com/api/soap/customer/customerAddress/customer_address.update.html)

Update address data of the required customer.

`addressData` is an array of customerAddressEntityCreate objects.

```js
magento.customerAddress.update({
  addressId:    val,
  addressData:  [ val, val, val ]
}, callback);

// or a single cell of address data

magento.customerAddress.update({
  addressId:    val,
  addressData:  val
}, callback);
```
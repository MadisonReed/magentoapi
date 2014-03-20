# Sales Order Invoice

## [addComment](http://www.magentocommerce.com/api/soap/sales/salesOrderInvoice/sales_order_invoice.addComment.html)

Allows you to add a new comment to the order invoice.

```js
magento.salesOrderInvoice.addComment({
  invoiceIncrementId: val,
  comment:            val,  /* optional */
  email:              val,  /* optional */
  includeComment:     val   /* optional */
}, callback);
```

## [cancel](http://www.magentocommerce.com/api/soap/sales/salesOrderInvoice/sales_order_invoice.cancel.html)

Allows you to cancel the required invoice.
Note that not all order invoices can be canceled.
Only some payment methods support canceling the order invoice (e.g., Google Checkout, PayPal Pro, PayPal Express Checkout).

```js
magento.salesOrderInvoice.cancel({
  invoiceIncrementId: val
}, callback);
```

## [capture](http://www.magentocommerce.com/api/soap/sales/salesOrderInvoice/sales_order_invoice.capture.html)

Allows you to capture the required invoice.
Note that not all order invoices can be captured.
Only some payment methods support capturing the order invoice (e.g., PayPal Pro).

```js
magento.salesOrderInvoice.capture({
  invoiceIncrementId: val
}, callback);
```

## [create](http://www.magentocommerce.com/api/soap/sales/salesOrderInvoice/sales_order_invoice.create.html)

Allows you to create a new invoice for an order.

```js
magento.salesOrderInvoice.create({
  orderIncrementId: val,
  itemsQty:         val,
  comment:          val,  /* optional */
  email:            val,  /* optional */
  includeComment:   val   /* optional */
}, callback);
```

## [info](http://www.magentocommerce.com/api/soap/sales/salesOrderInvoice/sales_order_invoice.info.html)

Allows you to retrieve information about the required invoice.

```js
magento.salesOrderInvoice.info({
  invoiceIncrementId: val
}, callback);
```

## [list](http://www.magentocommerce.com/api/soap/sales/salesOrderInvoice/sales_order_invoice.list.html)

Allows you to retrieve the list of order invoices. Additional filters can also be applied.

```js
magento.salesOrderInvoice.list(callback);

// or 

magento.salesOrderInvoice.list({
  filters: [ val, val, val ]
}, callback);

// or a single filter

magento.salesOrderInvoice.list({
  filters: val
}, callback);
```
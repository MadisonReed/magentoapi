/**
    Custom Magento error
    Inspiration: http://www.devthought.com/2011/12/22/a-string-is-not-an-error/

    Examples:
        new PMKError('Error Message');
        new PMKError('Error Message', err);
        new PMKError('Error Message', err, { key: val });
        new PMKError('Error Message', { key: val });

    If creating an error instance with a string, note that the stack trace will be that of where the error was initialized
    If extending a native error (by passing it as second argument) then trace will be accurate, keys copied over, and original message & name will be copied to the 'original' attribute
    If extending a non-native error (string or object) then the result will be similar to the first case, but the 'original' attribute will be equal to the non-native error

    @param {String} msg The relevant error message
    @param {Error|String|Object} [original] The original error being extended
*/
function MagentoError(msg) {
  var key;

  Error.call(this);

  for (var i = 1, l = arguments.length; i < l; i++) {
    extendError(this, arguments[i]);
  }

  if (!this.original) {
    Error.captureStackTrace(this, arguments.callee);
  }

  this.name = 'Magento Error',
  this.message = typeof msg === 'string' ? msg : 'An error occurred';
}
MagentoError.prototype.__proto__ = Error.prototype;

MagentoError.prototype.toString = function() {
  return JSON.stringify(this);
};

function extendError(err, additions) {
  for (var key in additions) {
    err[key] = additions[key];
  }

  if (additions instanceof Error) {
    err.original = {
      message: additions.message,
      name: additions.name
    };
  }
}

module.exports = MagentoError;

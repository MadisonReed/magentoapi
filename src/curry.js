// globals
var slice = Array.prototype.slice;

// delicious curry
function curry(fn) {
  var args = slice.call(arguments, 1);

  return function() {
    // keeping the 'this' of this function, which will be useful for prototype methods
    return fn.apply(this, args.concat(slice.call(arguments)));
  };
}

module.exports = curry;

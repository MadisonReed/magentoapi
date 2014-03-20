// internal dependencies
var MagentoError = require('./error.js');

// globals
var slice = Array.prototype.slice;

// base prototype function, used for all the prototypes
function prototypeBase(method, options /*, [arg1, [arg2, ]], callback */) {
  var funcArgs = slice.call(arguments, 2);
  var callback = funcArgs.pop(); // assuming callback
  var keys, k, i, l;
  var args, params, paramsArr;
  var mandatory, optional;
  var err;

  if (funcArgs.length > 1) {
    this.emit('error', new MagentoError('too many arguments passed'), callback);
    return this;
  }

  params = funcArgs[0] || {};
  keys = Object.keys(params);

  mandatory = options.mandatory ? options.mandatory.split(',') : false,
  optional = options.optional ? options.optional.split(',') : false;

  if (mandatory) {
    for (i = 0, l = mandatory.length; i < l; i++) {
      if (!params[ mandatory[i] ]) {
        err = new MagentoError('missing value for "' + mandatory[i] + '"', params);
        err.method = method;
        this.emit('error', err, callback);
        return this;
      }
    }
  }

  if (keys.length === 0) {
    this.emit('method', method, callback);
  } else {
    if (options.modifiers) {
      for (k in options.modifiers) {
        if (params[k]) {
          params[k] = options.modifiers[k](params[k]);
        }
      }
    }

    // params must now become an array
    paramsArr = [],
    keys = (mandatory || []).concat(optional || []),
    i = 0, l = keys.length;

    for (; i < l; i++) {
      if (!params[keys[i]]) {
        continue;
      }

      paramsArr.push(params[ keys[i] ]);
    }

    this.emit('method', method, paramsArr, callback);
  }
}

module.exports = prototypeBase;

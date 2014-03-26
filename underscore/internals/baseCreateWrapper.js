/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseCreate from './baseCreate';
import composeArgs from './composeArgs';
import isObject from '../objects/isObject';
import slice from '../arrays/slice';

/** Used to compose bitmasks for wrapper metadata */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    CURRY_FLAG = 4,
    CURRY_BOUND_FLAG = 8;

/**
 * The base implementation of `createWrapper` that creates the wrapper and
 * sets its meta data.
 *
 * @private
 * @param {Array} data The metadata array.
 * @returns {Function} Returns the new function.
 */
function baseCreateWrapper(data) {
  var func = data[0],
      bitmask = data[1],
      arity = data[2],
      thisArg = data[3],
      partialArgs = data[4],
      partialRightArgs = data[5],
      partialHolders = data[6],
      partialRightHolders = data[7];

  var isBind = bitmask & BIND_FLAG,
      isBindKey = bitmask & BIND_KEY_FLAG,
      isCurry = bitmask & CURRY_FLAG,
      isCurryBound = bitmask & CURRY_BOUND_FLAG,
      key = func;

  function bound() {
    var index = -1,
        length = arguments.length,
        args = Array(length);

    while (++index < length) {
      args[index] = arguments[index];
    }
    if (partialArgs) {
      args = composeArgs(partialArgs, partialHolders, args);
    }
    var thisBinding = isBind ? thisArg : this;
    if (this instanceof bound) {
      thisBinding = baseCreate(func.prototype);
      var result = func.apply(thisBinding, args);
      return isObject(result) ? result : thisBinding;
    }
    return func.apply(thisBinding, args);
  }
  return bound;
}

export default baseCreateWrapper;

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import createBindWrapper from './createBindWrapper';
import createHybridWrapper from './createHybridWrapper';
import createPartialWrapper from './createPartialWrapper';
import isFunction from '../object/isFunction';

/** Used to compose bitmasks for wrapper metadata */
var BIND_FLAG = 1,
    BIND_KEY_FLAG = 2,
    PARTIAL_FLAG = 32;

/** Used as the TypeError message for "Functions" methods */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to reference.
 * @param {number} bitmask The bitmask of flags.
 *  The bitmask may be composed of the following flags:
 *   1  - `_.bind`
 *   2  - `_.bindKey`
 *   4  - `_.curry`
 *   8  - `_.curryRight`
 *   16 - `_.curry` or `_.curryRight` of a bound function
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 * @param {number} arity The arity of `func`.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partialArgs] An array of arguments to prepend to those provided to the new function.
 * @param {Array} [partialHolders] An array of `partialArgs` placeholder indexes.
 * @param {Array} [partialRightArgs] An array of arguments to append to those provided to the new function.
 * @param {Array} [partialRightHolders] An array of `partialRightArgs` placeholder indexes.
 * @returns {Function} Returns the new function.
 */
function createWrapper(func, bitmask, arity, thisArg, partialArgs, partialHolders, partialRightArgs, partialRightHolders) {
  var isBindKey = bitmask & BIND_KEY_FLAG;
  if (!isFunction(func)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var isPartial = bitmask & PARTIAL_FLAG;
  if (isPartial && !partialArgs.length) {
    bitmask &= ~PARTIAL_FLAG;
    isPartial = false;
    partialArgs = partialHolders = null;
  }
  if (arity == null) {
    arity = func.length;
  }
  if (bitmask == BIND_FLAG) {
    var result = createBindWrapper(func, thisArg);
  } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !partialHolders.length) {
    result = createPartialWrapper(func, bitmask, partialArgs, thisArg);
  } else {
    result = createHybridWrapper(func, bitmask, arity, thisArg, partialArgs, partialHolders, partialRightArgs, partialRightHolders);
  }
  return result;
}

export default createWrapper;

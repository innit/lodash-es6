/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/** `Object#toString` result references */
var funcClass = '[object Function]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // avoid a Chakra bug in IE 11
  // https://github.com/jashkenas/underscore/issues/1621
  return typeof value == 'function' || false;
}
// fallback for older versions of Chrome and Safari
if (isFunction(/x/)) {
  isFunction = function(value) {
    return typeof value == 'function' && toString.call(value) == funcClass;
  };
}

export default isFunction;

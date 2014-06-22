/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseForOwn from '../internal/baseForOwn';
import isArguments from './isArguments';
import isArray from './isArray';
import isFunction from './isFunction';
import isString from './isString';

/**
 * Used as the maximum length of an array-like object.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var maxSafeInteger = Math.pow(2, 53) - 1;

/**
 * Checks if a collection is empty. A value is considered empty unless it is
 * an array, array-like object, or string with a length greater than `0` or
 * an object with own enumerable properties.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Array|Object|string} value The value to inspect.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  var result = true;
  if (!value) {
    return result;
  }
  var length = value.length;
  if ((length > -1 && length <= maxSafeInteger) &&
      (isArray(value) || isString(value) || isArguments(value) ||
        (typeof value == 'object' && isFunction(value.splice)))) {
    return !length;
  }
  baseForOwn(value, function() {
    result = false;
    return result;
  });
  return result;
}

export default isEmpty;

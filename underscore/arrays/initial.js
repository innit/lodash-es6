/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import slice from './slice';

/**
 * Gets all but the last element of `array`.
 *
 * Note: The `n` and `predicate` arguments are deprecated; replace with
 * `_.dropRight` and `_.dropRightWhile` respectively.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to query.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
function initial(array, n, guard) {
  var length = array ? array.length : 0;
  n = length - ((n == null || guard) ? 1 : n);
  return slice(array, 0, n < 0 ? 0 : n);
}

export default initial;

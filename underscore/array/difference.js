/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseDifference from '../internal/baseDifference';
import baseFlatten from '../internal/baseFlatten';
import isArguments from '../object/isArguments';
import isArray from '../object/isArray';

/**
 * Creates an array excluding all values of the provided arrays using
 * `SameValueZero` for equality comparisons.
 *
 * **Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
 * `NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The arrays of values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.difference([1, 2, 3], [5, 2, 10]);
 * // => [1, 3]
 */
function difference() {
  var index = -1,
      length = arguments.length;

  while (++index < length) {
    var value = arguments[index];
    if (isArray(value) || isArguments(value)) {
      break;
    }
  }
  return baseDifference(arguments[index], baseFlatten(arguments, false, true, ++index));
}

export default difference;

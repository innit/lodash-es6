/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseIndexOf from '../internal/baseIndexOf';
import isArguments from '../object/isArguments';
import isArray from '../object/isArray';

/**
 * Creates an array of unique values present in all provided arrays using
 * `SameValueZero` for equality comparisons.
 *
 * **Note:** `SameValueZero` is like strict equality, e.g. `===`, except that
 * `NaN` matches `NaN`. See the [ES6 spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
 * for more details.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {...Array} [arrays] The arrays to inspect.
 * @returns {Array} Returns the new array of shared values.
 * @example
 *
 * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
 * // => [1, 2]
 */
function intersection() {
  var args = [],
      argsIndex = -1,
      argsLength = arguments.length;

  while (++argsIndex < argsLength) {
    var value = arguments[argsIndex];
     if (isArray(value) || isArguments(value)) {
       args.push(value);
     }
  }
  argsLength = args.length;
  var array = args[0],
      index = -1,
      indexOf = baseIndexOf,
      length = array ? array.length : 0,
      result = [];

  outer:
  while (++index < length) {
    value = array[index];
    if (indexOf(result, value) < 0) {
      var argsIndex = argsLength;
      while (--argsIndex) {
        if (indexOf(args[argsIndex], value) < 0) {
          continue outer;
        }
      }
      result.push(value);
    }
  }
  return result;
}

export default intersection;

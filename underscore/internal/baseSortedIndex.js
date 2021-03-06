/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isFunction from '../object/isFunction';

/**
 * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` without
 * support for callback shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function} iteratee The function called per iteration.
 * @param {boolean} [retHighest=false] Specify returning the highest, instead
 *  of the lowest, index at which a value should be inserted into `array`.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 */
function baseSortedIndex(array, value, iteratee, retHighest) {
  var low = 0,
      high = array ? array.length : low;

  value = iteratee(value);
  var hintNum = typeof value == 'number' ||
    (value != null && isFunction(value.valueOf) && typeof value.valueOf() == 'number');

  while (low < high) {
    var mid = (low + high) >>> 1,
        computed = iteratee(array[mid]),
        setLow = retHighest ? (computed <= value) : (computed < value);

    if (hintNum && typeof computed != 'undefined') {
      computed = +computed;
      setLow = computed != computed || setLow;
    }
    if (setLow) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return high;
}

export default baseSortedIndex;

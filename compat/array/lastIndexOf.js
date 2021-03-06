/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import sortedLastIndex from './sortedLastIndex';

/* Native method references for those with the same name as other `lodash` methods */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * This method is like `_.indexOf` except that it iterates over elements of
 * `array` from right to left.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to search.
 * @param {*} value The value to search for.
 * @param {boolean|number} [fromIndex=array.length-1] The index to search from
 *  or `true` to perform a binary search on a sorted array.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
 * // => 4
 *
 * // using `fromIndex`
 * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
 * // => 1
 *
 * // performing a binary search
 * _.lastIndexOf([4, 4, 5, 5, 6, 6], 5, true);
 * // => 3
 */
function lastIndexOf(array, value, fromIndex) {
  var length = array ? array.length : 0,
      index = length;

  if (typeof fromIndex == 'number') {
    index = (fromIndex < 0 ? nativeMax(index + fromIndex, 0) : nativeMin(fromIndex || 0, index - 1)) + 1;
  } else if (fromIndex) {
    index = sortedLastIndex(array, value) - 1;
    return (length && array[index] === value) ? index : -1;
  }
  var isReflexive = value === value;
  while (index--) {
    var other = array[index];
    if ((isReflexive ? other === value : other !== other)) {
      return index;
    }
  }
  return -1;
}

export default lastIndexOf;

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseIndexOf from './baseIndexOf';

/**
 * The base implementation of `_.uniq` without support for callback shorthands
 * and `this` binding.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {boolean} [isSorted=false] Specify the array is sorted.
 * @param {Function} [iterator] The function called per iteration.
 * @returns {Array} Returns the new duplicate-value-free array.
 */
function baseUniq(array, isSorted, iterator) {
  var length = array ? array.length : 0;
  if (!length) {
    return [];
  }
  var index = -1,
      indexOf = baseIndexOf,
      result = [],
      seen = (iterator && !isSorted) ? [] : result;

  while (++index < length) {
    var value = array[index],
        computed = iterator ? iterator(value, index, array) : value;

    if (isSorted) {
      if (!index || seen !== computed) {
        seen = computed;
        result.push(value);
      }
    }
    else if (indexOf(seen, computed) < 0) {
      if (iterator) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

export default baseUniq;
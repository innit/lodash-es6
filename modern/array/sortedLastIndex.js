/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseCallback from '../internal/baseCallback';
import baseSortedIndex from '../internal/baseSortedIndex';
import identity from '../utility/identity';

/**
 * This method is like `_.sortedIndex` except that it returns the highest
 * index at which a value should be inserted into a given sorted array in
 * order to maintain the sort order of the array.
 *
 * @static
 * @memberOf _
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to evaluate.
 * @param {Function|Object|string} [iteratee=identity] The function called
 *  per iteration. If a property name or object is provided it is used to
 *  create a "_.pluck" or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {number} Returns the index at which `value` should be inserted
 *  into `array`.
 * @example
 *
 * _.sortedLastIndex([4, 4, 5, 5, 6, 6], 5);
 * // => 4
 */
function sortedLastIndex(array, value, iteratee, thisArg) {
  iteratee = iteratee == null ? identity : baseCallback(iteratee, thisArg, 1);
  return baseSortedIndex(array, value, iteratee, true);
}

export default sortedLastIndex;

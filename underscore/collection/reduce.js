/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseCallback from '../internal/baseCallback';
import baseEach from '../internal/baseEach';
import baseReduce from '../internal/baseReduce';
import isArray from '../object/isArray';

/**
 * A specialized version of `_.reduce` for arrays without support for callback
 * shorthands or `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function called per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initFromArray=false] Specify using the first element of
 *  `array` as the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initFromArray) {
  var index = -1,
      length = array.length;

  if (initFromArray && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Reduces a collection to a value which is the accumulated result of running
 * each element in the collection through `iteratee`, where each successive
 * execution consumes the return value of the previous execution. If `accumulator`
 * is not provided the first element of the collection is used as the initial
 * value. The `iteratee` is bound to `thisArg`and invoked with four arguments;
 * (accumulator, value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @alias foldl, inject
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} [iteratee=identity] The function called per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {*} [thisArg] The `this` binding of `iteratee`.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * var sum = _.reduce([1, 2, 3], function(sum, n) { return sum + n; });
 * // => 6
 *
 * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, n, key) {
 *   result[key] = n * 3;
 *   return result;
 * }, {});
 * // => { 'a': 3, 'b': 6, 'c': 9 } (property order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator, thisArg) {
  var func = isArray(collection) ? arrayReduce : baseReduce;
  return func(collection, baseCallback(iteratee, thisArg, 4), accumulator, arguments.length < 3, baseEach);
}

export default reduce;

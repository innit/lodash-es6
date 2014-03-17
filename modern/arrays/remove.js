/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import createCallback from '../functions/createCallback';

/** Used for native method references */
var arrayRef = Array.prototype;

/** Native method shortcuts */
var splice = arrayRef.splice;

/**
 * Removes all elements from an array that the predicate returns truthy for
 * and returns an array of removed elements. The predicate is bound to `thisArg`
 * and invoked with three arguments; (value, index, array).
 *
 * If a property name is provided for `predicate` the created "_.pluck" style
 * callback will return the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.where" style callback
 * will return `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @category Arrays
 * @param {Array} array The array to modify.
 * @param {Function|Object|string} [predicate=identity] The function called
 *  per iteration. If a property name or object is provided it will be used
 *  to create a "_.pluck" or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4, 5, 6];
 * var evens = _.remove(array, function(num) { return num % 2 == 0; });
 *
 * console.log(array);
 * // => [1, 3, 5]
 *
 * console.log(evens);
 * // => [2, 4, 6]
 */
function remove(array, predicate, thisArg) {
  var index = -1,
      length = array ? array.length : 0,
      result = [];

  predicate = createCallback(predicate, thisArg, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      splice.call(array, index--, 1);
      length--;
    }
  }
  return result;
}

export default remove;

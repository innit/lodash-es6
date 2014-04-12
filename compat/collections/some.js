/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseEach from '../internals/baseEach';
import createCallback from '../functions/createCallback';
import isArray from '../objects/isArray';

/**
 * Checks if the predicate returns truthy for **any** element of a collection.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is bound to `thisArg` and invoked
 * with three arguments; (value, index|key, collection).
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
 * @alias any
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=identity] The function called
 *  per iteration. If a property name or object is provided it will be used
 *  to create a "_.pluck" or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {boolean} Returns `true` if any element passed the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36 },
 *   { 'name': 'fred',   'age': 40, 'blocked': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.some(characters, 'blocked');
 * // => true
 *
 * // using "_.where" callback shorthand
 * _.some(characters, { 'age': 1 });
 * // => false
 */
function some(collection, predicate, thisArg) {
  var result;
  predicate = createCallback(predicate, thisArg, 3);

  if (isArray(collection)) {
    var index = -1,
        length = collection.length;

    while (++index < length) {
      if (predicate(collection[index], index, collection)) {
        return true;
      }
    }
  } else {
    baseEach(collection, function(value, index, collection) {
      return !(result = predicate(value, index, collection));
    });
  }
  return !!result;
}

export default some;

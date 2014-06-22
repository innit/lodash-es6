/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseEach from '../internal/baseEach';
import callback from '../utility/callback';
import charAtCallback from '../internal/charAtCallback';
import isArray from '../object/isArray';
import isString from '../object/isString';

/**
 * Retrieves the maximum value of a collection. If the collection is empty
 * or falsey `-Infinity` is returned. If an iterator function is provided it
 * is executed for each value in the collection to generate the criterion by
 * which the value is ranked. The `iterator` is bound to `thisArg` and invoked
 * with three arguments; (value, index, collection).
 *
 * If a property name is provided for `iterator` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `iterator` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [iterator] The function called per iteration.
 *  If a property name or object is provided it is used to create a "_.pluck"
 *  or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `iterator`.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * _.max([4, 2, 8, 6]);
 * // => 8
 *
 * _.max([]);
 * // => -Infinity
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36 },
 *   { 'name': 'fred',   'age': 40 }
 * ];
 *
 * _.max(characters, function(chr) { return chr.age; });
 * // => { 'name': 'fred', 'age': 40 };
 *
 * // using "_.pluck" callback shorthand
 * _.max(characters, 'age');
 * // => { 'name': 'fred', 'age': 40 };
 */
function max(collection, iterator, thisArg) {
  var computed = -Infinity,
      result = computed,
      type = typeof iterator;

  // enables use as a callback for functions like `_.map`
  if ((type == 'number' || type == 'string') && thisArg && thisArg[iterator] === collection) {
    iterator = null;
  }
  if (iterator == null && isArray(collection)) {
    var index = -1,
        length = collection.length;

    while (++index < length) {
      var value = collection[index];
      if (value > result) {
        result = value;
      }
    }
  } else {
    iterator = (iterator == null && isString(collection))
      ? charAtCallback
      : callback(iterator, thisArg, 3);

    baseEach(collection, function(value, index, collection) {
      var current = iterator(value, index, collection);
      if (current > computed || (current === -Infinity && current === result)) {
        computed = current;
        result = value;
      }
    });
  }
  return result;
}

export default max;
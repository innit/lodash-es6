/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import arrayFilter from '../internal/arrayFilter';
import baseCallback from '../internal/baseCallback';
import baseFilter from '../internal/baseFilter';
import isArray from '../object/isArray';

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * the predicate returns truthy for. The predicate is bound to `thisArg` and
 * invoked with three arguments; (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created "_.pluck" style
 * callback returns the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.where" style callback
 * returns `true` for elements that have the properties of the given object,
 * else `false`.
 *
 * @static
 * @memberOf _
 * @alias select
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=identity] The function called
 *  per iteration. If a property name or object is provided it is used to
 *  create a "_.pluck" or "_.where" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * var evens = _.filter([1, 2, 3, 4], function(n) { return n % 2 == 0; });
 * // => [2, 4]
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36 },
 *   { 'name': 'fred',   'age': 40, 'blocked': true }
 * ];
 *
 * // using "_.pluck" callback shorthand
 * _.filter(characters, 'blocked');
 * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
 *
 * // using "_.where" callback shorthand
 * _.filter(characters, { 'age': 36 });
 * // => [{ 'name': 'barney', 'age': 36 }]
 */
function filter(collection, predicate, thisArg) {
  var func = isArray(collection) ? arrayFilter : baseFilter;

  predicate = baseCallback(predicate, thisArg, 3);
  return func(collection, predicate);
}

export default filter;

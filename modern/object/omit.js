/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import arrayMap from '../internal/arrayMap';
import baseCallback from '../internal/baseCallback';
import baseDifference from '../internal/baseDifference';
import baseFlatten from '../internal/baseFlatten';
import keysIn from './keysIn';
import pickByArray from '../internal/pickByArray';
import pickByCallback from '../internal/pickByCallback';
import toObject from '../internal/toObject';

/**
 * Creates a shallow clone of `object` excluding the specified properties.
 * Property names may be specified as individual arguments or as arrays of
 * property names. If a predicate is provided it is executed for each property
 * of `object` omitting the properties the predicate returns truthy for. The
 * predicate is bound to `thisArg` and invoked with three arguments;
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|...(string|string[])} [predicate] The function called per
 *  iteration or property names to omit, specified as individual property
 *  names or arrays of property names.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
 * // => { 'name': 'fred' }
 *
 * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
 *   return typeof value == 'number';
 * });
 * // => { 'name': 'fred' }
 */
function omit(object, predicate, thisArg) {
  if (object == null) {
    return {};
  }
  var iterable = toObject(object);
  if (typeof predicate != 'function') {
    var props = arrayMap(baseFlatten(arguments, false, false, 1), String);
    return pickByArray(iterable, baseDifference(keysIn(iterable), props));
  }
  predicate = baseCallback(predicate, thisArg, 3);
  return pickByCallback(iterable, function(value, key, object) {
    return !predicate(value, key, object);
  });
}

export default omit;

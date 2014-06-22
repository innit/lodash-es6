/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseFlatten from '../internal/baseFlatten';
import basePick from '../internal/basePick';
import callback from '../utility/callback';

/**
 * Creates a shallow clone of `object` composed of the specified properties.
 * Property names may be specified as individual arguments or as arrays of
 * property names. If a predicate is provided it is executed for each property
 * of `object` picking the properties the predicate returns truthy for. The
 * predicate is bound to `thisArg` and invoked with three arguments;
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {Function|...(string|string[])} [predicate] The function called per
 *  iteration or property names to pick, specified as individual property
 *  names or arrays of property names.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
 * // => { 'name': 'fred' }
 *
 * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
 *   return key.charAt(0) != '_';
 * });
 * // => { 'name': 'fred' }
 */
function pick(object, predicate, thisArg) {
  if (object == null) {
    return {};
  }
  return basePick(Object(object), typeof predicate == 'function'
    ? callback(predicate, thisArg, 3)
    : baseFlatten(arguments, false, false, 1));
}

export default pick;

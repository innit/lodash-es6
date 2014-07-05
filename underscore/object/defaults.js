/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Assigns own enumerable properties of source object(s) to the destination
 * object for all destination properties that resolve to `undefined`. Once a
 * property is set, additional defaults of the same property are ignored.
 *
 * **Note:** See the [documentation example of `_.partialRight`](http://lodash.com/docs#partialRight)
 * for a deep version of this method.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns the destination object.
 * @example
 *
 * _.defaults({ 'name': 'barney' }, { 'age': 36 }, { 'name': 'fred', 'employer': 'slate' });
 * // => { 'name': 'barney', 'age': 36, 'employer': 'slate' }
 */
function defaults(object) {
  if (object == null) {
    return object;
  }
  var args = arguments,
      index = 0,
      length = args.length,
      type = typeof args[2];

  if ((type == 'number' || type == 'string') && args[3] && args[3][args[2]] === args[1]) {
    length = 2;
  }
  while (++index < length) {
    var source = args[index];
    for (var key in source) {
      if (typeof object[key] == 'undefined') {
        object[key] = source[key];
      }
    }
  }
  return object;
}

export default defaults;

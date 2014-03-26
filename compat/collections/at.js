/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseFlatten from '../internals/baseFlatten';
import isString from '../objects/isString';
import support from '../support';

/**
 * Creates an array of elements from the specified indexes, or keys, of the
 * `collection`. Indexes may be specified as individual arguments or as arrays
 * of indexes.
 *
 * @static
 * @memberOf _
 * @category Collections
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {...(number|number[]|string|string[])} [index] The indexes to retrieve,
 *  specified as individual indexes or arrays of indexes.
 * @returns {Array} Returns the array of picked elements.
 * @example
 *
 * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
 * // => ['a', 'c', 'e']
 *
 * _.at(['fred', 'barney', 'pebbles'], 0, 2);
 * // => ['fred', 'pebbles']
 */
function at(collection, guard) {
  var args = arguments,
      index = -1,
      props = baseFlatten(args, true, false, 1),
      length = props.length,
      type = typeof guard;

  // enables use as a callback for functions like `_.map`
  if ((type == 'number' || type == 'string') && args[2] && args[2][guard] === collection) {
    length = 1;
  }
  if (support.unindexedChars && isString(collection)) {
    collection = collection.split('');
  }
  var result = Array(length);
  while(++index < length) {
    result[index] = collection[props[index]];
  }
  return result;
}

export default at;

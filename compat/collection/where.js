/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import filter from './filter';
import matches from '../utility/matches';

/**
 * Performs a deep comparison between each element in `collection` and the
 * source object, returning an array of all elements that have equivalent
 * property values.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to search.
 * @param {Object} source The object of property values to match.
 * @returns {Array} Returns the new filtered array.
 * @example
 *
 * var characters = [
 *   { 'name': 'barney', 'age': 36, 'employer': 'slate', 'pets': ['hoppy'] },
 *   { 'name': 'fred',   'age': 40, 'employer': 'slate', 'pets': ['baby puss', 'dino'] }
 * ];
 *
 * _.pluck(_.where(characters, { 'age': 36 }), 'name');
 * // => ['barney']
 *
 * _.pluck(_.where(characters, { 'pets': ['dino'] }), 'name');
 * // => ['fred']
 *
 * _.pluck(_.where(characters, { 'employer': 'slate' }), 'name');
 * // => ['barney', 'fred']
 */
function where(collection, source) {
  return filter(collection, matches(source));
}

export default where;

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseForOwnRight from './baseForOwnRight';
import toIterable from './toIterable';

/**
 * Used as the maximum length of an array-like value.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

/**
 * The base implementation of `_.forEachRight` without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} iteratee The function called per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
function baseEachRight(collection, iteratee) {
  var length = collection ? collection.length : 0;
  if (!(typeof length == 'number' && length > -1 && length <= MAX_SAFE_INTEGER)) {
    return baseForOwnRight(collection, iteratee);
  }
  var iterable = toIterable(collection);
  while (length--) {
    if (iteratee(iterable[length], length, iterable) === false) {
      break;
    }
  }
  return collection;
}

export default baseEachRight;

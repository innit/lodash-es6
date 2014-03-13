/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseForOwn from './baseForOwn';
import isString from '../objects/isString';
import support from '../support';

/**
 * The base implementation of `_.forEach` without support for callback
 * shorthands or `thisArg` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} callback The function called per iteration.
 * @returns {Array|Object|string} Returns `collection`.
 */
function baseEach(collection, callback) {
  var index = -1,
      iterable = collection,
      length = collection ? collection.length : 0;

  if (typeof length == 'number' && length > -1) {
    length |= 0;
    if (support.unindexedChars && isString(iterable)) {
      iterable = iterable.split('');
    }
    while (++index < length) {
      if (callback(iterable[index], index, collection) === false) {
        break;
      }
    }
  } else {
    baseForOwn(collection, callback);
  }
  return collection;
}

export default baseEach;

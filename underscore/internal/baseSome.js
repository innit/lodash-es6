/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseEach from './baseEach';

/** Used as the semantic version number */
var VERSION = '3.0.0-pre';

/** Used as the property name for wrapper metadata */
var EXPANDO = '__lodash_' + VERSION.replace(/[-.]/g, '_') + '__';

/** Used by methods to exit iteration */
var breakIndicator = EXPANDO + 'breaker__';

/**
 * The base implementation of `_.some` without support for callback shorthands
 * or `this` binding.
 *
 * @private
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function} predicate The function called per iteration.
 * @returns {boolean} Returns `true` if any element passed the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return result && breakIndicator;
  });
  return !!result;
}

export default baseSome;

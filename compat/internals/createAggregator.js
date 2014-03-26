/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseEach from './baseEach';
import createCallback from '../functions/createCallback';
import isArray from '../objects/isArray';

/**
 * Creates a function that aggregates a collection, creating an object or
 * array composed from the results of running each element in the collection
 * through a callback. The given setter function sets the keys and values of
 * the composed object or array.
 *
 * @private
 * @param {Function} setter The setter function.
 * @param {boolean} [retArray=false] A flag to indicate that the aggregator
 *  function should return an array.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, retArray) {
  return function(collection, callback, thisArg) {
    var result = retArray ? [[], []] : {};

    callback = createCallback(callback, thisArg, 3);
    if (isArray(collection)) {
      var index = -1,
          length = collection.length;

      while (++index < length) {
        var value = collection[index];
        setter(result, value, callback(value, index, collection), collection);
      }
    } else {
      baseEach(collection, function(value, key, collection) {
        setter(result, value, callback(value, key, collection), collection);
      });
    }
    return result;
  };
}

export default createAggregator;

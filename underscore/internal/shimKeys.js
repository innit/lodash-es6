/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import keysIn from '../object/keysIn';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to check objects for own properties */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var index = -1,
      props = keysIn(object),
      length = props.length,
      result = [];

  while (++index < length) {
    var key = props[index];
    if (hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

export default shimKeys;

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isArguments from './isArguments';
import isArray from './isArray';
import isNative from './isNative';
import isString from './isString';
import keysIn from './keysIn';
import support from '../support';
import toObject from '../internal/toObject';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to check objects for own properties */
var hasOwnProperty = objectProto.hasOwnProperty;

/* Native method references for those with the same name as other `lodash` methods */
var nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;

/**
 * A fallback implementation of `Object.keys` which creates an array of the
 * own enumerable property names of `object`.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the array of property names.
 */
function shimKeys(object) {
  var keyIndex,
      index = -1,
      props = keysIn(object),
      length = props.length,
      objLength = length && object.length,
      maxIndex = objLength - 1,
      result = [];

  var allowIndexes = typeof objLength == 'number' && objLength > 0 &&
    (isArray(object) || (support.nonEnumArgs && isArguments(object)) ||
      (support.nonEnumStrings && isString(object)));

  while (++index < length) {
    var key = props[index];
    if ((allowIndexes && (keyIndex = +key, keyIndex > -1 && keyIndex <= maxIndex && keyIndex % 1 == 0)) ||
        hasOwnProperty.call(object, key)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * @static
 * @memberOf _
 * @category Object
 * @param {Object} object The object to inspect.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Shape() {
 *   this.x = 0;
 *   this.y = 0;
 * }
 *
 * Shape.prototype.z = 0;
 *
 * _.keys(new Shape);
 * // => ['x', 'y'] (property order is not guaranteed)
 */
var keys = !nativeKeys ? shimKeys : function(object) {
  object = toObject(object);

  var Ctor = object.constructor,
      length = object.length;

  if ((Ctor && object === Ctor.prototype) ||
      (typeof length == 'number' && length > 0) ||
      (support.enumPrototypes && typeof object == 'function')) {
    return shimKeys(object);
  }
  return nativeKeys(object);
};

export default keys;

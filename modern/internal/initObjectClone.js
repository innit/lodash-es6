/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseAssign from './baseAssign';
import bufferClone from './bufferClone';
import isFunction from '../object/isFunction';

/** Used to match `RegExp` flags from their coerced string values */
var reFlags = /\w*$/;

/** `Object#toString` result references */
var argsClass = '[object Arguments]',
    arrayClass = '[object Array]',
    boolClass = '[object Boolean]',
    dateClass = '[object Date]',
    errorClass = '[object Error]',
    funcClass = '[object Function]',
    mapClass = '[object Map]',
    numberClass = '[object Number]',
    objectClass = '[object Object]',
    regexpClass = '[object RegExp]',
    setClass = '[object Set]',
    stringClass = '[object String]',
    weakMapClass = '[object WeakMap]';

var arrayBufferClass = '[object ArrayBuffer]',
    float32Class = '[object Float32Array]',
    float64Class = '[object Float64Array]',
    int8Class = '[object Int8Array]',
    int16Class = '[object Int16Array]',
    int32Class = '[object Int32Array]',
    uint8Class = '[object Uint8Array]',
    uint8ClampedClass = '[object Uint8ClampedArray]',
    uint16Class = '[object Uint16Array]',
    uint32Class = '[object Uint32Array]';

/** Used to identify object classifications that `_.clone` supports */
var cloneableClasses = {};
cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
cloneableClasses[arrayBufferClass] = cloneableClasses[boolClass] =
cloneableClasses[dateClass] = cloneableClasses[float32Class] =
cloneableClasses[float64Class] = cloneableClasses[int8Class] =
cloneableClasses[int16Class] = cloneableClasses[int32Class] =
cloneableClasses[numberClass] = cloneableClasses[objectClass] =
cloneableClasses[regexpClass] = cloneableClasses[stringClass] =
cloneableClasses[uint8Class] = cloneableClasses[uint8ClampedClass] =
cloneableClasses[uint16Class] = cloneableClasses[uint32Class] = true;
cloneableClasses[errorClass] =
cloneableClasses[funcClass] = cloneableClasses[mapClass] =
cloneableClasses[setClass] = cloneableClasses[weakMapClass] = false;

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep=false] Specify a deep clone.
 * @returns {*} Returns the initialized clone value.
 */
function initObjectClone(object, isDeep) {
  var className = toString.call(object);
  if (!cloneableClasses[className]) {
    return object;
  }
  var Ctor = object.constructor,
      isArgs = className == argsClass,
      isObj = className == objectClass;

  if (isObj && !(isFunction(Ctor) && (Ctor instanceof Ctor))) {
    Ctor = Object;
  }
  if (isArgs || isObj) {
    var result = isDeep ? new Ctor : baseAssign(new Ctor, object);
    if (isArgs) {
      result.length = object.length;
    }
    return result;
  }
  switch (className) {
    case arrayBufferClass:
      return bufferClone(object);

    case boolClass:
    case dateClass:
      return new Ctor(+object);

    case float32Class: case float64Class:
    case int8Class: case int16Class: case int32Class:
    case uint8Class: case uint8ClampedClass: case uint16Class: case uint32Class:
      var buffer = object.buffer;
      return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

    case numberClass:
    case stringClass:
      return new Ctor(object);

    case regexpClass:
      result = Ctor(object.source, reFlags.exec(object));
      result.lastIndex = object.lastIndex;
  }
  return result;
}

export default initObjectClone;

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import arrayEach from './arrayEach';
import baseForOwn from './baseForOwn';
import initArrayClone from './initArrayClone';
import initObjectClone from './initObjectClone';
import isArray from '../object/isArray';
import isObject from '../object/isObject';

/** `Object#toString` result references */
var objectClass = '[object Object]';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/**
 * The base implementation of `_.clone` without support for argument juggling
 * and `this` binding.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep=false] Specify a deep clone.
 * @param {Function} [customizer] The function to customize cloning values.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates clones with source counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, customizer, stackA, stackB) {
  var result = customizer ? customizer(value) : undefined;
  if (typeof result != 'undefined') {
    return result;
  }
  var isArr = isArray(value);
  result = value;
  if (isArr) {
    result = initArrayClone(value, isDeep);
  } else if (isObject(value)) {
    result = initObjectClone(value, isDeep);
    value = (isDeep && toString.call(result) == objectClass) ? value : result;
  }
  if (!isDeep || result === value) {
    return result;
  }
  // check for circular references and return corresponding clone
  stackA || (stackA = []);
  stackB || (stackB = []);

  var length = stackA.length;
  while (length--) {
    if (stackA[length] == value) {
      return stackB[length];
    }
  }
  // add the source value to the stack of traversed objects
  // and associate it with its clone
  stackA.push(value);
  stackB.push(result);

  // recursively populate clone (susceptible to call stack limits)
  (isArr ? arrayEach : baseForOwn)(value, function(valValue, key) {
    var valClone = customizer ? customizer(valValue, key) : undefined;
    result[key] = typeof valClone == 'undefined'
      ? baseClone(valValue, isDeep, null, stackA, stackB)
      : valClone;
  });

  return result;
}

export default baseClone;

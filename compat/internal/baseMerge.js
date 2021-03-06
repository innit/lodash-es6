/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import arrayEach from './arrayEach';
import baseForOwn from './baseForOwn';
import isArray from '../object/isArray';
import isArrayLike from './isArrayLike';
import isPlainObject from '../object/isPlainObject';

/**
 * The base implementation of `_.merge` without support for argument juggling,
 * multiple sources, and `this` binding.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {Function} [customizer] The function to customize merging properties.
 * @param {Array} [stackA=[]] Tracks traversed source objects.
 * @param {Array} [stackB=[]] Associates values with source counterparts.
 * @returns {Object} Returns the destination object.
 */
function baseMerge(object, source, customizer, stackA, stackB) {
  var isSrcArr = isArrayLike(source);

  (isSrcArr ? arrayEach : baseForOwn)(source, function(srcValue, key, source) {
    var isArr = srcValue && isArrayLike(srcValue),
        isObj = srcValue && isPlainObject(srcValue),
        value = object[key];

    if (!(isArr || isObj)) {
      result = customizer ? customizer(value, srcValue, key, object, source) : undefined;
      if (typeof result == 'undefined') {
        result = srcValue;
      }
      if (isSrcArr || typeof result != 'undefined') {
        object[key] = result;
      }
      return;
    }
    // avoid merging previously merged cyclic sources
    stackA || (stackA = []);
    stackB || (stackB = []);

    var length = stackA.length;
    while (length--) {
      if (stackA[length] == srcValue) {
        object[key] = stackB[length];
        return;
      }
    }
    var result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
        isDeep = typeof result == 'undefined';

    if (isDeep) {
      result = isArr
        ? (isArray(value) ? value : [])
        : (isPlainObject(value) ? value : {});
    }
    // add the source value to the stack of traversed objects
    // and associate it with its merged value
    stackA.push(srcValue);
    stackB.push(result);

    // recursively merge objects and arrays (susceptible to call stack limits)
    if (isDeep) {
      baseMerge(result, srcValue, customizer, stackA, stackB);
    }
    object[key] = result;
  });

  return object;
}

export default baseMerge;

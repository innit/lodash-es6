/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import identity from '../utility/identity';
import isNative from '../object/isNative';
import root from './root';

/** Used as the semantic version number */
var VERSION = '3.0.0-pre';

/** Used as the property name for wrapper metadata */
var EXPANDO = '__lodash_' + VERSION.replace(/[-.]/g, '_') + '__';

/** Used as the property descriptor for wrapper metadata */
var descriptor = {
  'configurable': false,
  'enumerable': false,
  'value': null,
  'writable': false
};

/** Native method references */
var WeakMap = isNative(WeakMap = root.WeakMap) && WeakMap;

/** Used to set metadata on functions */
var defineProperty = (function() {
  // IE 8 only accepts DOM elements
  try {
    var o = {},
        func = isNative(func = Object.defineProperty) && func,
        result = func(o, o, o) && func;
  } catch(e) {}
  return result;
}());

/** Used to store function metadata */
var metaMap = WeakMap && new WeakMap;

/**
 * The base implementation of `setData` without support for hot loop detection.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
function baseSetData(func, data) {
  metaMap.set(func, data);
  return func;
}
// fallback for environments without `WeakMap`
if (!WeakMap) {
  baseSetData = !defineProperty ? identity : function(func, value) {
    descriptor.value = value;
    defineProperty(func, EXPANDO, descriptor);
    descriptor.value = null;
    return func;
  };
}

export default baseSetData;

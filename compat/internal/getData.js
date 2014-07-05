/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isNative from '../object/isNative';
import noop from '../utility/noop';
import root from './root';

/** Used as the semantic version number */
var VERSION = '3.0.0-pre';

/** Used as the property name for wrapper metadata */
var EXPANDO = '__lodash_' + VERSION.replace(/[-.]/g, '_') + '__';

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
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
function getData(func) {
  return metaMap.get(func);
}
// fallback for environments without `WeakMap`
if (!WeakMap) {
  getData = !defineProperty ? noop : function(func) {
    return func[EXPANDO];
  };
}

export default getData;

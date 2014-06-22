/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

/**
 * Checks if `value` is a DOM node in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM node, else `false`.
 */
function isNode(value) {
  // IE < 9 presents DOM nodes as `Object` objects except they have `toString`
  // methods that are `typeof` "string" and still can coerce nodes to strings
  return typeof value.toString != 'function' && typeof (value + '') == 'string';
}

export default isNode;
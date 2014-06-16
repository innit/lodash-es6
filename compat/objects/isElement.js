/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isNode from '../internals/isNode';
import isPlainObject from './isPlainObject';
import support from '../support';

/** Used for native method references */
var objectProto = Object.prototype;

/** Used to resolve the internal `[[Class]]` of values */
var toString = objectProto.toString;

/**
 * Checks if `value` is a DOM element.
 *
 * @static
 * @memberOf _
 * @category Objects
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * _.isElement(document.body);
 * // => true
 *
 * _.isElement('<body>');
 * // => false
 */
function isElement(value) {
  return (value && typeof value == 'object' && value.nodeType === 1 &&
    (support.nodeClass ? toString.call(value).indexOf('Element') > -1 : isNode(value))) || false;
}
// fallback for environments without DOM support
if (!support.dom) {
  isElement = function(value) {
    return (value && typeof value == 'object' && value.nodeType === 1 &&
      !isPlainObject(value)) || false;
  };
}

export default isElement;

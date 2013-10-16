/**
 * Lo-Dash 2.2.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isFunction from '../objects/isFunction';

/**
 * Used for `Array` method references.
 *
 * Normally `Array.prototype` would suffice, however, using an array literal
 * avoids issues in Narwhal.
 */
var arrayRef = [];

/** Native method shortcuts */
var push = arrayRef.push;

/**
 * Creates a function that provides `value` to the wrapper function as its
 * first argument. Additional arguments provided to the function are appended
 * to those provided to the wrapper function. The wrapper is executed with
 * the `this` binding of the created function.
 *
 * @static
 * @memberOf _
 * @category Functions
 * @param {*} value The value to wrap.
 * @param {Function} wrapper The wrapper function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var pre= _.wrap(_.escape, function(func, text) {
 *   return '<div>' + func(text) + '</div>';
 * });
 * preify('Fred, Wilma, & Pebbles');
 * // => '<div>Fred, Wilma, &amp; Pebbles</div>'
 */
function wrap(value, wrapper) {
  var args = [value];
  push.apply(args, arguments);
  return createBound(wrapper, 16, args);
}

export default = wrap;

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isFunction from '../object/isFunction';
import slice from '../array/slice';

/** Used as the TypeError message for "Functions" methods */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Executes the `func` function after `wait` milliseconds. Additional arguments
 * are provided to `func` when it is invoked.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay execution.
 * @param {...*} [args] The arguments to invoke the function with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) { console.log(text); }, 1000, 'later');
 * // => logs 'later' after one second
 */
function delay(func, wait) {
  if (!isFunction(func)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var args = slice(arguments, 2);
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

export default delay;

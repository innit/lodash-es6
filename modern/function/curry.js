/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseCurry from '../internal/baseCurry';

/** Used to compose bitmasks for wrapper metadata */
var CURRY_FLAG = 4;

/**
 * Creates a function which accepts one or more arguments of `func` that when
 * invoked either executes `func` returning its result, if all `func` arguments
 * have been provided, or returns a function that accepts one or more of the
 * remaining `func` arguments, and so on. The arity of `func` can be specified
 * if `func.length` is not sufficient.
 *
 * **Note:** This method does not set the `length` property of curried functions.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var curried = _.curry(function(a, b, c) {
 *   console.log([a, b, c]);
 * });
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 */
function curry(func, arity) {
  var result = baseCurry(func, CURRY_FLAG, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// assign default placeholders
curry.placeholder = {};

export default curry;

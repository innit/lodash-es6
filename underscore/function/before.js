/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isFunction from '../object/isFunction';

/** Used as the TypeError message for "Functions" methods */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that executes `func`, with the `this` binding and
 * arguments of the created function, until it is called `n` times.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {number} n The number of times `func` may be executed.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery('#add').on('click', _.before(5, addContactToList));
 * // => allows adding up to 5 contacts to the list
 */
function before(n, func) {
  var result;
  if (!isFunction(func)) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return function() {
    if (--n > 0) {
      result = func.apply(this, arguments);
    } else {
      func = null;
    }
    return result;
  };
}

export default before;

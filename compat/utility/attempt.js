/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isError from '../object/isError';

/**
 * Attempts to execute `func`, returning either the result or the caught
 * error object.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {*} func The function to attempt.
 * @returns {*} Returns the `func` result or error object.
 * @example
 *
 * // avoid throwing errors for invalid selectors
 * var elements = _.attempt(function() {
 *   return document.querySelectorAll(selector);
 * });
 *
 * if (_.isError(elements)) {
 *   elements = [];
 * }
 */
function attempt(func) {
  try {
    return func();
  } catch(e) {
    return isError(e) ? e : Error(e);
  }
}

export default attempt;

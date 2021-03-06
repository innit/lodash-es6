/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import isString from '../object/isString';
import support from '../support';
import toObject from './toObject';
import values from '../object/values';

/**
 * Used as the maximum length of an array-like value.
 * See the [ES6 spec](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
 * for more details.
 */
var MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

/**
 * Converts `value` to an array-like object if it is not one.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {Array|Object} Returns the array-like object.
 */
function toIterable(value) {
  if (value == null) {
    return [];
  }
  var length = value.length;
  if (!(typeof length == 'number' && length > -1 && length <= MAX_SAFE_INTEGER)) {
    return values(value);
  }
  value = toObject(value);
  if (support.unindexedChars && isString(value)) {
    var index = -1;
    while (++index < length) {
      value[index] = value.charAt(index);
    }
  }
  return value;
}

export default toIterable;

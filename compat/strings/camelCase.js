/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import createCompounder from '../internals/createCompounder';

/**
 * Converts `string` to camel case.
 * See [Wikipedia](http://en.wikipedia.org/wiki/CamelCase) for more details.
 *
 * @static
 * @memberOf _
 * @category Strings
 * @param {string} [string=''] The string to camel case.
 * @returns {string} Returns the camel cased string.
 * @example
 *
 * _.camelCase('Hello world');
 * // => 'helloWorld'
 *
 * _.camelCase('--hello-world');
 * // => 'helloWorld'
 *
 * _.camelCase('__hello_world__');
 * // => 'helloWorld'
 */
var camelCase = createCompounder(function(result, word, index) {
  return result + word.charAt(0)[index ? 'toUpperCase' : 'toLowerCase']() + word.slice(1);
});

export default camelCase;

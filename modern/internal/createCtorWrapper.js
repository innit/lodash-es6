/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import baseCreate from './baseCreate';
import isObject from '../object/isObject';

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new function.
 */
function createCtorWrapper(Ctor) {
  return function() {
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, arguments);

    // mimic the constructor's `return` behavior
    // http://es5.github.io/#x13.2.2
    return isObject(result) ? result : thisBinding;
  };
}

export default createCtorWrapper;

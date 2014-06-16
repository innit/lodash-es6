/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import assign from './objects/assign';
import clone from './objects/clone';
import defaults from './objects/defaults';
import functions from './objects/functions';
import has from './objects/has';
import invert from './objects/invert';
import isArguments from './objects/isArguments';
import isArray from './objects/isArray';
import isBoolean from './objects/isBoolean';
import isDate from './objects/isDate';
import isElement from './objects/isElement';
import isEmpty from './objects/isEmpty';
import isEqual from './objects/isEqual';
import isFinite from './objects/isFinite';
import isFunction from './objects/isFunction';
import isNaN from './objects/isNaN';
import isNull from './objects/isNull';
import isNumber from './objects/isNumber';
import isObject from './objects/isObject';
import isRegExp from './objects/isRegExp';
import isString from './objects/isString';
import isUndefined from './objects/isUndefined';
import keys from './objects/keys';
import keysIn from './objects/keysIn';
import omit from './objects/omit';
import pairs from './objects/pairs';
import pick from './objects/pick';
import values from './objects/values';

export default {
  'assign': assign,
  'clone': clone,
  'defaults': defaults,
  'extend': assign,
  'functions': functions,
  'has': has,
  'invert': invert,
  'isArguments': isArguments,
  'isArray': isArray,
  'isBoolean': isBoolean,
  'isDate': isDate,
  'isElement': isElement,
  'isEmpty': isEmpty,
  'isEqual': isEqual,
  'isFinite': isFinite,
  'isFunction': isFunction,
  'isNaN': isNaN,
  'isNull': isNull,
  'isNumber': isNumber,
  'isObject': isObject,
  'isRegExp': isRegExp,
  'isString': isString,
  'isUndefined': isUndefined,
  'keys': keys,
  'keysIn': keysIn,
  'methods': functions,
  'omit': omit,
  'pairs': pairs,
  'pick': pick,
  'values': values
};

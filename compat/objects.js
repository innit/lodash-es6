/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import assign from './objects/assign';
import clone from './objects/clone';
import cloneDeep from './objects/cloneDeep';
import create from './objects/create';
import defaults from './objects/defaults';
import findKey from './objects/findKey';
import findLastKey from './objects/findLastKey';
import forIn from './objects/forIn';
import forInRight from './objects/forInRight';
import forOwn from './objects/forOwn';
import forOwnRight from './objects/forOwnRight';
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
import isError from './objects/isError';
import isFinite from './objects/isFinite';
import isFunction from './objects/isFunction';
import isNaN from './objects/isNaN';
import isNull from './objects/isNull';
import isNumber from './objects/isNumber';
import isObject from './objects/isObject';
import isPlainObject from './objects/isPlainObject';
import isRegExp from './objects/isRegExp';
import isString from './objects/isString';
import isUndefined from './objects/isUndefined';
import keys from './objects/keys';
import keysIn from './objects/keysIn';
import mapValues from './objects/mapValues';
import merge from './objects/merge';
import omit from './objects/omit';
import pairs from './objects/pairs';
import pick from './objects/pick';
import transform from './objects/transform';
import values from './objects/values';
import valuesIn from './objects/valuesIn';

export default {
  'assign': assign,
  'clone': clone,
  'cloneDeep': cloneDeep,
  'create': create,
  'defaults': defaults,
  'extend': assign,
  'findKey': findKey,
  'findLastKey': findLastKey,
  'forIn': forIn,
  'forInRight': forInRight,
  'forOwn': forOwn,
  'forOwnRight': forOwnRight,
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
  'isError': isError,
  'isFinite': isFinite,
  'isFunction': isFunction,
  'isNaN': isNaN,
  'isNull': isNull,
  'isNumber': isNumber,
  'isObject': isObject,
  'isPlainObject': isPlainObject,
  'isRegExp': isRegExp,
  'isString': isString,
  'isUndefined': isUndefined,
  'keys': keys,
  'keysIn': keysIn,
  'mapValues': mapValues,
  'merge': merge,
  'methods': functions,
  'omit': omit,
  'pairs': pairs,
  'pick': pick,
  'transform': transform,
  'values': values,
  'valuesIn': valuesIn
};

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import assign from './object/assign';
import clone from './object/clone';
import cloneDeep from './object/cloneDeep';
import create from './object/create';
import defaults from './object/defaults';
import findKey from './object/findKey';
import findLastKey from './object/findLastKey';
import forIn from './object/forIn';
import forInRight from './object/forInRight';
import forOwn from './object/forOwn';
import forOwnRight from './object/forOwnRight';
import functions from './object/functions';
import has from './object/has';
import invert from './object/invert';
import isArguments from './object/isArguments';
import isArray from './object/isArray';
import isBoolean from './object/isBoolean';
import isDate from './object/isDate';
import isElement from './object/isElement';
import isEmpty from './object/isEmpty';
import isEqual from './object/isEqual';
import isError from './object/isError';
import isFinite from './object/isFinite';
import isFunction from './object/isFunction';
import isNaN from './object/isNaN';
import isNative from './object/isNative';
import isNull from './object/isNull';
import isNumber from './object/isNumber';
import isObject from './object/isObject';
import isPlainObject from './object/isPlainObject';
import isRegExp from './object/isRegExp';
import isString from './object/isString';
import isUndefined from './object/isUndefined';
import keys from './object/keys';
import keysIn from './object/keysIn';
import mapValues from './object/mapValues';
import merge from './object/merge';
import omit from './object/omit';
import pairs from './object/pairs';
import pick from './object/pick';
import transform from './object/transform';
import values from './object/values';
import valuesIn from './object/valuesIn';

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
  'isNative': isNative,
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

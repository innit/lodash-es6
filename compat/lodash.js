/**
 * @license
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
import arrays from './array';
import chaining from './chain';
import collections from './collection';
import functions from './function';
import objects from './object';
import strings from './string';
import utilities from './utility';
import arrayEach from './internal/arrayEach';
import baseAssign from './internal/baseAssign';
import baseForOwn from './internal/baseForOwn';
import baseFunctions from './internal/baseFunctions';
import isObject from './object/isObject';
import keys from './object/keys';
import lodash from './chain/lodash';
import lodashWrapper from './internal/lodashWrapper';
import mixin from './utility/mixin';
import support from './support';

/** Used as the semantic version number */
var VERSION = '3.0.0-pre';

/** Used for native method references */
var arrayProto = Array.prototype;

// wrap `_.mixin` so it works when provided only one argument
mixin = (function(func) {
  return function(object, source, options) {
    var isObj = isObject(source),
        noOpts = options == null,
        props = noOpts && isObj && keys(source),
        methodNames = props && baseFunctions(source, props);

    if ((props && props.length && !methodNames.length) || (noOpts && !isObj)) {
      if (noOpts) {
        options = source;
      }
      source = object;
      object = this;
    }
    return func(object, source, options);
  };
}(mixin));

// add functions that return wrapped values when chaining
lodash.after = functions.after;
lodash.assign = objects.assign;
lodash.at = collections.at;
lodash.before = functions.before;
lodash.bind = functions.bind;
lodash.bindAll = functions.bindAll;
lodash.bindKey = functions.bindKey;
lodash.callback = utilities.callback;
lodash.chain = chaining.chain;
lodash.chunk = arrays.chunk;
lodash.compact = arrays.compact;
lodash.compose = functions.compose;
lodash.constant = utilities.constant;
lodash.countBy = collections.countBy;
lodash.create = objects.create;
lodash.curry = functions.curry;
lodash.curryRight = functions.curryRight;
lodash.debounce = functions.debounce;
lodash.defaults = objects.defaults;
lodash.defer = functions.defer;
lodash.delay = functions.delay;
lodash.difference = arrays.difference;
lodash.drop = arrays.drop;
lodash.dropRight = arrays.dropRight;
lodash.dropRightWhile = arrays.dropRightWhile;
lodash.dropWhile = arrays.dropWhile;
lodash.filter = collections.filter;
lodash.flatten = arrays.flatten;
lodash.flattenDeep = arrays.flattenDeep;
lodash.forEach = collections.forEach;
lodash.forEachRight = collections.forEachRight;
lodash.forIn = objects.forIn;
lodash.forInRight = objects.forInRight;
lodash.forOwn = objects.forOwn;
lodash.forOwnRight = objects.forOwnRight;
lodash.functions = objects.functions;
lodash.groupBy = collections.groupBy;
lodash.indexBy = collections.indexBy;
lodash.initial = arrays.initial;
lodash.intersection = arrays.intersection;
lodash.invert = objects.invert;
lodash.invoke = collections.invoke;
lodash.keys = keys;
lodash.keysIn = objects.keysIn;
lodash.map = collections.map;
lodash.mapValues = objects.mapValues;
lodash.matches = utilities.matches;
lodash.memoize = functions.memoize;
lodash.merge = objects.merge;
lodash.mixin = mixin;
lodash.negate = functions.negate;
lodash.omit = objects.omit;
lodash.once = functions.once;
lodash.pairs = objects.pairs;
lodash.partial = functions.partial;
lodash.partialRight = functions.partialRight;
lodash.partition = collections.partition;
lodash.pick = objects.pick;
lodash.pluck = collections.pluck;
lodash.property = utilities.property;
lodash.pull = arrays.pull;
lodash.pullAt = arrays.pullAt;
lodash.range = utilities.range;
lodash.reject = collections.reject;
lodash.remove = arrays.remove;
lodash.rest = arrays.rest;
lodash.shuffle = collections.shuffle;
lodash.slice = arrays.slice;
lodash.sortBy = collections.sortBy;
lodash.take = arrays.take;
lodash.takeRight = arrays.takeRight;
lodash.takeRightWhile = arrays.takeRightWhile;
lodash.takeWhile = arrays.takeWhile;
lodash.tap = chaining.tap;
lodash.throttle = functions.throttle;
lodash.times = utilities.times;
lodash.toArray = collections.toArray;
lodash.transform = objects.transform;
lodash.union = arrays.union;
lodash.uniq = arrays.uniq;
lodash.unzip = arrays.unzip;
lodash.values = objects.values;
lodash.valuesIn = objects.valuesIn;
lodash.where = collections.where;
lodash.without = arrays.without;
lodash.wrap = functions.wrap;
lodash.xor = arrays.xor;
lodash.zip = arrays.zip;
lodash.zipObject = arrays.zipObject;

// add aliases
lodash.collect = collections.map;
lodash.each = collections.forEach;
lodash.eachRight = collections.forEachRight;
lodash.extend = objects.assign;
lodash.iteratee = utilities.callback;
lodash.methods = objects.functions;
lodash.object = arrays.zipObject;
lodash.select = collections.filter;
lodash.tail = arrays.rest;
lodash.unique = arrays.uniq;

// add functions to `lodash.prototype`
mixin(lodash, baseAssign({}, lodash));

// add functions that return unwrapped values when chaining
lodash.attempt = utilities.attempt;
lodash.camelCase = strings.camelCase;
lodash.capitalize = strings.capitalize;
lodash.clone = objects.clone;
lodash.cloneDeep = objects.cloneDeep;
lodash.contains = collections.contains;
lodash.endsWith = strings.endsWith;
lodash.escape = strings.escape;
lodash.escapeRegExp = strings.escapeRegExp;
lodash.every = collections.every;
lodash.find = collections.find;
lodash.findIndex = arrays.findIndex;
lodash.findKey = objects.findKey;
lodash.findLast = collections.findLast;
lodash.findLastIndex = arrays.findLastIndex;
lodash.findLastKey = objects.findLastKey;
lodash.findWhere = collections.findWhere;
lodash.first = arrays.first;
lodash.has = objects.has;
lodash.identity = utilities.identity;
lodash.indexOf = arrays.indexOf;
lodash.isArguments = objects.isArguments;
lodash.isArray = objects.isArray;
lodash.isBoolean = objects.isBoolean;
lodash.isDate = objects.isDate;
lodash.isElement = objects.isElement;
lodash.isEmpty = objects.isEmpty;
lodash.isEqual = objects.isEqual;
lodash.isError = objects.isError;
lodash.isFinite = objects.isFinite;
lodash.isFunction = objects.isFunction;
lodash.isNaN = objects.isNaN;
lodash.isNative = objects.isNative;
lodash.isNull = objects.isNull;
lodash.isNumber = objects.isNumber;
lodash.isObject = isObject;
lodash.isPlainObject = objects.isPlainObject;
lodash.isRegExp = objects.isRegExp;
lodash.isString = objects.isString;
lodash.isUndefined = objects.isUndefined;
lodash.kebabCase = strings.kebabCase;
lodash.last = arrays.last;
lodash.lastIndexOf = arrays.lastIndexOf;
lodash.max = collections.max;
lodash.min = collections.min;
lodash.noConflict = utilities.noConflict;
lodash.noop = utilities.noop;
lodash.now = utilities.now;
lodash.pad = strings.pad;
lodash.padLeft = strings.padLeft;
lodash.padRight = strings.padRight;
lodash.parseInt = utilities.parseInt;
lodash.random = utilities.random;
lodash.reduce = collections.reduce;
lodash.reduceRight = collections.reduceRight;
lodash.repeat = strings.repeat;
lodash.result = utilities.result;
lodash.size = collections.size;
lodash.snakeCase = strings.snakeCase;
lodash.some = collections.some;
lodash.sortedIndex = arrays.sortedIndex;
lodash.sortedLastIndex = arrays.sortedLastIndex;
lodash.startsWith = strings.startsWith;
lodash.template = strings.template;
lodash.trim = strings.trim;
lodash.trimLeft = strings.trimLeft;
lodash.trimRight = strings.trimRight;
lodash.trunc = strings.trunc;
lodash.unescape = strings.unescape;
lodash.uniqueId = utilities.uniqueId;

// add aliases
lodash.all = collections.every;
lodash.any = collections.some;
lodash.detect = collections.find;
lodash.foldl = collections.reduce;
lodash.foldr = collections.reduceRight;
lodash.head = arrays.first;
lodash.include = collections.contains;
lodash.inject = collections.reduce;

mixin(lodash, (function() {
  var source = {};
  baseForOwn(lodash, function(func, methodName) {
    if (!lodash.prototype[methodName]) {
      source[methodName] = func;
    }
  });
  return source;
}()), false);

// add functions capable of returning wrapped and unwrapped values when chaining
lodash.sample = collections.sample;

baseForOwn(lodash, function(func, methodName) {
  var callbackable = methodName != 'sample';
  if (!lodash.prototype[methodName]) {
    lodash.prototype[methodName] = function(n, guard) {
      var chainAll = this.__chain__,
          result = func(this.__wrapped__, n, guard);

      return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function')))
        ? result
        : new lodashWrapper(result, chainAll);
    };
  }
});

/**
 * The semantic version number.
 *
 * @static
 * @memberOf _
 * @type string
 */
lodash.VERSION = VERSION;

lodash.support = support;
(lodash.templateSettings = strings.templateSettings).imports._ = lodash;

// add "Chaining" functions to the wrapper
lodash.prototype.chain = chaining.wrapperChain;
lodash.prototype.toJSON = chaining.wrapperValueOf;
lodash.prototype.toString = chaining.wrapperToString;
lodash.prototype.value = chaining.wrapperValueOf;
lodash.prototype.valueOf = chaining.wrapperValueOf;

// add `Array` functions that return unwrapped values
arrayEach(['join', 'pop', 'shift'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    var chainAll = this.__chain__,
        result = func.apply(this.__wrapped__, arguments);

    return chainAll
      ? new lodashWrapper(result, chainAll)
      : result;
  };
});

// add `Array` functions that return the existing wrapped value
arrayEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    func.apply(this.__wrapped__, arguments);
    return this;
  };
});

// add `Array` functions that return new wrapped values
arrayEach(['concat', 'splice'], function(methodName) {
  var func = arrayProto[methodName];
  lodash.prototype[methodName] = function() {
    return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
  };
});

// avoid array-like object bugs with `Array#shift` and `Array#splice`
// in IE < 9, Firefox < 10, Narwhal, and RingoJS
if (!support.spliceObjects) {
  arrayEach(['pop', 'shift', 'splice'], function(methodName) {
    var func = arrayProto[methodName],
        isSplice = methodName == 'splice';

    lodash.prototype[methodName] = function() {
      var chainAll = this.__chain__,
          value = this.__wrapped__,
          result = func.apply(value, arguments);

      if (value.length === 0) {
        delete value[0];
      }
      return (chainAll || isSplice)
        ? new lodashWrapper(result, chainAll)
        : result;
    };
  });
}

export default lodash;

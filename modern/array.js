/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import chunk from './array/chunk';
import compact from './array/compact';
import difference from './array/difference';
import drop from './array/drop';
import dropRight from './array/dropRight';
import dropRightWhile from './array/dropRightWhile';
import dropWhile from './array/dropWhile';
import findIndex from './array/findIndex';
import findLastIndex from './array/findLastIndex';
import first from './array/first';
import flatten from './array/flatten';
import indexOf from './array/indexOf';
import initial from './array/initial';
import intersection from './array/intersection';
import last from './array/last';
import lastIndexOf from './array/lastIndexOf';
import pull from './array/pull';
import pullAt from './array/pullAt';
import remove from './array/remove';
import rest from './array/rest';
import slice from './array/slice';
import sortedIndex from './array/sortedIndex';
import take from './array/take';
import takeRight from './array/takeRight';
import takeRightWhile from './array/takeRightWhile';
import takeWhile from './array/takeWhile';
import union from './array/union';
import uniq from './array/uniq';
import without from './array/without';
import xor from './array/xor';
import zip from './array/zip';
import zipObject from './array/zipObject';

export default {
  'chunk': chunk,
  'compact': compact,
  'difference': difference,
  'drop': drop,
  'dropRight': dropRight,
  'dropRightWhile': dropRightWhile,
  'dropWhile': dropWhile,
  'findIndex': findIndex,
  'findLastIndex': findLastIndex,
  'first': first,
  'flatten': flatten,
  'head': first,
  'indexOf': indexOf,
  'initial': initial,
  'intersection': intersection,
  'last': last,
  'lastIndexOf': lastIndexOf,
  'object': zipObject,
  'pull': pull,
  'pullAt': pullAt,
  'remove': remove,
  'rest': rest,
  'slice': slice,
  'sortedIndex': sortedIndex,
  'tail': rest,
  'take': take,
  'takeRight': takeRight,
  'takeRightWhile': takeRightWhile,
  'takeWhile': takeWhile,
  'union': union,
  'uniq': uniq,
  'unique': uniq,
  'unzip': zip,
  'without': without,
  'xor': xor,
  'zip': zip,
  'zipObject': zipObject
};

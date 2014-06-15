/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import chunk from './arrays/chunk';
import compact from './arrays/compact';
import difference from './arrays/difference';
import drop from './arrays/drop';
import dropRight from './arrays/dropRight';
import dropRightWhile from './arrays/dropRightWhile';
import dropWhile from './arrays/dropWhile';
import findIndex from './arrays/findIndex';
import findLastIndex from './arrays/findLastIndex';
import first from './arrays/first';
import flatten from './arrays/flatten';
import indexOf from './arrays/indexOf';
import initial from './arrays/initial';
import intersection from './arrays/intersection';
import last from './arrays/last';
import lastIndexOf from './arrays/lastIndexOf';
import pull from './arrays/pull';
import pullAt from './arrays/pullAt';
import range from './arrays/range';
import remove from './arrays/remove';
import rest from './arrays/rest';
import slice from './arrays/slice';
import sortedIndex from './arrays/sortedIndex';
import take from './arrays/take';
import takeRight from './arrays/takeRight';
import takeRightWhile from './arrays/takeRightWhile';
import takeWhile from './arrays/takeWhile';
import union from './arrays/union';
import uniq from './arrays/uniq';
import without from './arrays/without';
import xor from './arrays/xor';
import zip from './arrays/zip';
import zipObject from './arrays/zipObject';

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
  'range': range,
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

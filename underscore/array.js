/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import compact from './array/compact';
import difference from './array/difference';
import drop from './array/drop';
import findIndex from './array/findIndex';
import first from './array/first';
import flatten from './array/flatten';
import indexOf from './array/indexOf';
import initial from './array/initial';
import intersection from './array/intersection';
import last from './array/last';
import lastIndexOf from './array/lastIndexOf';
import rest from './array/rest';
import slice from './array/slice';
import sortedIndex from './array/sortedIndex';
import take from './array/take';
import union from './array/union';
import uniq from './array/uniq';
import without from './array/without';
import zip from './array/zip';
import zipObject from './array/zipObject';

export default {
  'compact': compact,
  'difference': difference,
  'drop': drop,
  'findIndex': findIndex,
  'first': first,
  'flatten': flatten,
  'head': first,
  'indexOf': indexOf,
  'initial': initial,
  'intersection': intersection,
  'last': last,
  'lastIndexOf': lastIndexOf,
  'object': zipObject,
  'rest': rest,
  'slice': slice,
  'sortedIndex': sortedIndex,
  'tail': rest,
  'take': take,
  'union': union,
  'uniq': uniq,
  'unique': uniq,
  'unzip': zip,
  'without': without,
  'zip': zip,
  'zipObject': zipObject
};

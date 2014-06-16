/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import compact from './arrays/compact';
import difference from './arrays/difference';
import drop from './arrays/drop';
import findIndex from './arrays/findIndex';
import first from './arrays/first';
import flatten from './arrays/flatten';
import indexOf from './arrays/indexOf';
import initial from './arrays/initial';
import intersection from './arrays/intersection';
import last from './arrays/last';
import lastIndexOf from './arrays/lastIndexOf';
import range from './arrays/range';
import rest from './arrays/rest';
import slice from './arrays/slice';
import sortedIndex from './arrays/sortedIndex';
import take from './arrays/take';
import union from './arrays/union';
import uniq from './arrays/uniq';
import without from './arrays/without';
import zip from './arrays/zip';
import zipObject from './arrays/zipObject';

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
  'range': range,
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

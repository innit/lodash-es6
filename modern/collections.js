/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import at from './collections/at';
import contains from './collections/contains';
import countBy from './collections/countBy';
import every from './collections/every';
import filter from './collections/filter';
import find from './collections/find';
import findLast from './collections/findLast';
import findWhere from './collections/findWhere';
import forEach from './collections/forEach';
import forEachRight from './collections/forEachRight';
import groupBy from './collections/groupBy';
import indexBy from './collections/indexBy';
import invoke from './collections/invoke';
import map from './collections/map';
import max from './collections/max';
import min from './collections/min';
import partition from './collections/partition';
import pluck from './collections/pluck';
import reduce from './collections/reduce';
import reduceRight from './collections/reduceRight';
import reject from './collections/reject';
import sample from './collections/sample';
import shuffle from './collections/shuffle';
import size from './collections/size';
import some from './collections/some';
import sortBy from './collections/sortBy';
import toArray from './collections/toArray';
import where from './collections/where';

export default {
  'all': every,
  'any': some,
  'at': at,
  'collect': map,
  'contains': contains,
  'countBy': countBy,
  'detect': find,
  'each': forEach,
  'eachRight': forEachRight,
  'every': every,
  'filter': filter,
  'find': find,
  'findLast': findLast,
  'findWhere': findWhere,
  'foldl': reduce,
  'foldr': reduceRight,
  'forEach': forEach,
  'forEachRight': forEachRight,
  'groupBy': groupBy,
  'include': contains,
  'indexBy': indexBy,
  'inject': reduce,
  'invoke': invoke,
  'map': map,
  'max': max,
  'min': min,
  'partition': partition,
  'pluck': pluck,
  'reduce': reduce,
  'reduceRight': reduceRight,
  'reject': reject,
  'sample': sample,
  'select': filter,
  'shuffle': shuffle,
  'size': size,
  'some': some,
  'sortBy': sortBy,
  'toArray': toArray,
  'where': where
};

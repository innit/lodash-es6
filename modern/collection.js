/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import at from './collection/at';
import contains from './collection/contains';
import countBy from './collection/countBy';
import every from './collection/every';
import filter from './collection/filter';
import find from './collection/find';
import findLast from './collection/findLast';
import findWhere from './collection/findWhere';
import forEach from './collection/forEach';
import forEachRight from './collection/forEachRight';
import groupBy from './collection/groupBy';
import indexBy from './collection/indexBy';
import invoke from './collection/invoke';
import map from './collection/map';
import max from './collection/max';
import min from './collection/min';
import partition from './collection/partition';
import pluck from './collection/pluck';
import reduce from './collection/reduce';
import reduceRight from './collection/reduceRight';
import reject from './collection/reject';
import sample from './collection/sample';
import shuffle from './collection/shuffle';
import size from './collection/size';
import some from './collection/some';
import sortBy from './collection/sortBy';
import toArray from './collection/toArray';
import where from './collection/where';

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

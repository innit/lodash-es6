/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import contains from './collections/contains';
import countBy from './collections/countBy';
import every from './collections/every';
import filter from './collections/filter';
import find from './collections/find';
import findWhere from './collections/findWhere';
import forEach from './collections/forEach';
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
  'collect': map,
  'contains': contains,
  'countBy': countBy,
  'detect': find,
  'each': forEach,
  'every': every,
  'filter': filter,
  'find': find,
  'findWhere': findWhere,
  'foldl': reduce,
  'foldr': reduceRight,
  'forEach': forEach,
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

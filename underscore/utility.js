/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import attempt from './utility/attempt';
import constant from './utility/constant';
import identity from './utility/identity';
import matches from './utility/matches';
import mixin from './utility/mixin';
import noConflict from './utility/noConflict';
import now from './utility/now';
import property from './utility/property';
import random from './utility/random';
import range from './utility/range';
import result from './utility/result';
import times from './utility/times';
import uniqueId from './utility/uniqueId';

export default {
  'attempt': attempt,
  'constant': constant,
  'identity': identity,
  'matches': matches,
  'mixin': mixin,
  'noConflict': noConflict,
  'now': now,
  'property': property,
  'random': random,
  'range': range,
  'result': result,
  'times': times,
  'uniqueId': uniqueId
};

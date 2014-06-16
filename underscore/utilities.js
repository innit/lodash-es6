/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import constant from './utilities/constant';
import createCallback from './functions/createCallback';
import escape from './utilities/escape';
import identity from './utilities/identity';
import matches from './utilities/matches';
import mixin from './utilities/mixin';
import noConflict from './utilities/noConflict';
import now from './utilities/now';
import property from './utilities/property';
import random from './utilities/random';
import range from './arrays/range';
import result from './utilities/result';
import template from './utilities/template';
import templateSettings from './utilities/templateSettings';
import times from './utilities/times';
import unescape from './utilities/unescape';
import uniqueId from './utilities/uniqueId';

export default {
  'callback': createCallback,
  'constant': constant,
  'createCallback': createCallback,
  'escape': escape,
  'identity': identity,
  'matches': matches,
  'mixin': mixin,
  'noConflict': noConflict,
  'now': now,
  'property': property,
  'random': random,
  'range': range,
  'result': result,
  'template': template,
  'templateSettings': templateSettings,
  'times': times,
  'unescape': unescape,
  'uniqueId': uniqueId
};

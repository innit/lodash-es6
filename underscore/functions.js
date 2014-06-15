/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import after from './functions/after';
import bind from './functions/bind';
import bindAll from './functions/bindAll';
import compose from './functions/compose';
import createCallback from './functions/createCallback';
import debounce from './functions/debounce';
import defer from './functions/defer';
import delay from './functions/delay';
import memoize from './functions/memoize';
import negate from './functions/negate';
import once from './functions/once';
import partial from './functions/partial';
import throttle from './functions/throttle';
import wrap from './functions/wrap';

export default {
  'after': after,
  'bind': bind,
  'bindAll': bindAll,
  'callback': createCallback,
  'compose': compose,
  'createCallback': createCallback,
  'debounce': debounce,
  'defer': defer,
  'delay': delay,
  'memoize': memoize,
  'negate': negate,
  'once': once,
  'partial': partial,
  'throttle': throttle,
  'wrap': wrap
};

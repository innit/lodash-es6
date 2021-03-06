/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import after from './function/after';
import before from './function/before';
import bind from './function/bind';
import bindAll from './function/bindAll';
import compose from './function/compose';
import debounce from './function/debounce';
import defer from './function/defer';
import delay from './function/delay';
import memoize from './function/memoize';
import once from './function/once';
import partial from './function/partial';
import throttle from './function/throttle';
import wrap from './function/wrap';

export default {
  'after': after,
  'before': before,
  'bind': bind,
  'bindAll': bindAll,
  'compose': compose,
  'debounce': debounce,
  'defer': defer,
  'delay': delay,
  'memoize': memoize,
  'once': once,
  'partial': partial,
  'throttle': throttle,
  'wrap': wrap
};

/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize modern exports="es6" -o ./modern/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import after from './function/after';
import bind from './function/bind';
import bindAll from './function/bindAll';
import bindKey from './function/bindKey';
import compose from './function/compose';
import curry from './function/curry';
import debounce from './function/debounce';
import defer from './function/defer';
import delay from './function/delay';
import memoize from './function/memoize';
import negate from './function/negate';
import once from './function/once';
import partial from './function/partial';
import partialRight from './function/partialRight';
import throttle from './function/throttle';
import wrap from './function/wrap';

export default {
  'after': after,
  'bind': bind,
  'bindAll': bindAll,
  'bindKey': bindKey,
  'compose': compose,
  'curry': curry,
  'debounce': debounce,
  'defer': defer,
  'delay': delay,
  'memoize': memoize,
  'negate': negate,
  'once': once,
  'partial': partial,
  'partialRight': partialRight,
  'throttle': throttle,
  'wrap': wrap
};

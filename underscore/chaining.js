/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import chain from './chaining/chain';
import tap from './chaining/tap';
import wrapperChain from './chaining/wrapperChain';
import wrapperValueOf from './chaining/wrapperValueOf';

export default {
  'chain': chain,
  'tap': tap,
  'toJSON': wrapperValueOf,
  'value': wrapperValueOf,
  'wrapperChain': wrapperChain,
  'wrapperValueOf': wrapperValueOf
};

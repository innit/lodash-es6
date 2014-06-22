/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="es6" -o ./underscore/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import escape from './string/escape';
import escapeRegExp from './string/escapeRegExp';
import template from './string/template';
import templateSettings from './string/templateSettings';
import unescape from './string/unescape';

export default {
  'escape': escape,
  'escapeRegExp': escapeRegExp,
  'template': template,
  'templateSettings': templateSettings,
  'unescape': unescape
};

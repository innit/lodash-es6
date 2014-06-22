/**
 * Lo-Dash 3.0.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import camelCase from './string/camelCase';
import capitalize from './string/capitalize';
import endsWith from './string/endsWith';
import escape from './string/escape';
import escapeRegExp from './string/escapeRegExp';
import kebabCase from './string/kebabCase';
import pad from './string/pad';
import padLeft from './string/padLeft';
import padRight from './string/padRight';
import repeat from './string/repeat';
import snakeCase from './string/snakeCase';
import startsWith from './string/startsWith';
import template from './string/template';
import templateSettings from './string/templateSettings';
import trim from './string/trim';
import trimLeft from './string/trimLeft';
import trimRight from './string/trimRight';
import trunc from './string/trunc';
import unescape from './string/unescape';

export default {
  'camelCase': camelCase,
  'capitalize': capitalize,
  'endsWith': endsWith,
  'escape': escape,
  'escapeRegExp': escapeRegExp,
  'kebabCase': kebabCase,
  'pad': pad,
  'padLeft': padLeft,
  'padRight': padRight,
  'repeat': repeat,
  'snakeCase': snakeCase,
  'startsWith': startsWith,
  'template': template,
  'templateSettings': templateSettings,
  'trim': trim,
  'trimLeft': trimLeft,
  'trimRight': trimRight,
  'trunc': trunc,
  'unescape': unescape
};

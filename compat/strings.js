/**
 * Lo-Dash 2.5.0-pre (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize exports="es6" -o ./compat/`
 * Copyright 2012-2014 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.6.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */

import camelCase from './strings/camelCase';
import capitalize from './strings/capitalize';
import endsWith from './strings/endsWith';
import escape from './utilities/escape';
import escapeRegExp from './strings/escapeRegExp';
import kebabCase from './strings/kebabCase';
import pad from './strings/pad';
import padLeft from './strings/padLeft';
import padRight from './strings/padRight';
import repeat from './strings/repeat';
import snakeCase from './strings/snakeCase';
import startsWith from './strings/startsWith';
import template from './utilities/template';
import templateSettings from './utilities/templateSettings';
import trim from './strings/trim';
import trimLeft from './strings/trimLeft';
import trimRight from './strings/trimRight';
import trunc from './strings/trunc';
import unescape from './utilities/unescape';

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

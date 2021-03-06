"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _postcssValueParser = _interopRequireDefault(require("postcss-value-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const atrule = 'atrule';
const decl = 'decl';
const rule = 'rule';

function reduceCalcWhitespaces(node) {
  if (node.type === 'space') {
    node.value = ' ';
  } else if (node.type === 'function') {
    if (!['var', 'env', 'constant'].includes(node.value.toLowerCase())) {
      node.before = node.after = '';
    }
  }
}

function reduceWhitespaces(node) {
  if (node.type === 'space') {
    node.value = ' ';
  } else if (node.type === 'div') {
    node.before = node.after = '';
  } else if (node.type === 'function') {
    if (!['var', 'env', 'constant'].includes(node.value.toLowerCase())) {
      node.before = node.after = '';
    }

    if (node.value.toLowerCase() === 'calc') {
      _postcssValueParser.default.walk(node.nodes, reduceCalcWhitespaces);

      return false;
    }
  }
}

function pluginCreator() {
  return {
    postcssPlugin: 'postcss-normalize-whitespace',

    OnceExit(css) {
      const cache = {};
      css.walk(node => {
        const {
          type
        } = node;

        if (~[decl, rule, atrule].indexOf(type) && node.raws.before) {
          node.raws.before = node.raws.before.replace(/\s/g, '');
        }

        if (type === decl) {
          // Ensure that !important values do not have any excess whitespace
          if (node.important) {
            node.raws.important = '!important';
          } // Remove whitespaces around ie 9 hack


          node.value = node.value.replace(/\s*(\\9)\s*/, '$1');
          const value = node.value;

          if (cache[value]) {
            node.value = cache[value];
          } else {
            const parsed = (0, _postcssValueParser.default)(node.value);
            const result = parsed.walk(reduceWhitespaces).toString(); // Trim whitespace inside functions & dividers

            node.value = result;
            cache[value] = result;
          } // Remove extra semicolons and whitespace before the declaration


          if (node.raws.before) {
            const prev = node.prev();

            if (prev && prev.type !== rule) {
              node.raws.before = node.raws.before.replace(/;/g, '');
            }
          }

          node.raws.between = ':';
          node.raws.semicolon = false;
        } else if (type === rule || type === atrule) {
          node.raws.between = node.raws.after = '';
          node.raws.semicolon = false;
        }
      }); // Remove final newline

      css.raws.after = '';
    }

  };
}

pluginCreator.postcss = true;
var _default = pluginCreator;
exports.default = _default;
module.exports = exports.default;
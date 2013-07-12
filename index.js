/* globals module, require */
/**
 * Module dependencies.
 */

 var visit = require('rework-visit');

 module.exports = function() {
  function processMathStatement(statement) {
    // grab math(...) value
    var math = statement.split('math(')[1];
    // find the closing bracket
    math = math.slice(0, math.lastIndexOf(')'));
    // get the trailing unit or just add nothing
    var unit = (math.match(/%|in|cm|mm|em|ex|pt|pc|px/g, '')) ? math.match(/%|in|cm|mm|em|ex|pt|pc|px/g, '')[0] : '';

    math = math.replace(/%|in|cm|mm|em|ex|pt|pc|px/g, '');

    // do some ev[i|a]l
    var sum = eval(math);
    if (sum) {
      return sum + unit;
    } else {
      // log the error
      throw new Error('error');
    }
  }

  function substitute(decl) {
    var regex = /\bmath\((.*?)\)/g;
    var mathStatements = decl.value.match(regex);
    mathStatements.forEach(function(item) {
      decl.value = decl.value.replace(item, processMathStatement(item));
    });
    return decl.value;
  }

  return function math(style) {
    visit(style, function(declarations, node) {
      declarations.forEach(function(decl) {
        if (!decl.value.match(/\bmath\(/)) {
          return;
        }
        decl.value = substitute(decl);
      });
    });
  };
};
/* global require */
var rework = require('rework');
var math = require('./index');
var fs = require('fs');
var read = fs.readFileSync;
var input = read('input.css', 'utf8');



var output = rework(input).use(math()).toString();

fs.writeFile('output.css', output, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

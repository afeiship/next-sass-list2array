var nx = require('next-js-core2');
var sass = require('node-sass');
var SassList = sass.types.List;
var SassString = sass.types.String;
require('../src/next-sass-list2array');

test('nx.sassList2array', function() {
  var list = new SassList(4, true);
  list.setValue(0, new SassString('255'));
  list.setValue(1, new SassString('0'));
  list.setValue(2, new SassString('0'));
  list.setValue(3, new SassString('0.8'));

  expect(nx.sassList2array(list)).toEqual(['255', '0', '0', '0.8']);
});

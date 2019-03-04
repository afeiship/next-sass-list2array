(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.sassList2array = function(inSassList) {
    var length = inSassList.getLength();
    var array = [];
    for (var i = 0; i < length; i++) {
      array.push(inSassList.getValue(i));
    }
    return array;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sassList2array;
  }
})();

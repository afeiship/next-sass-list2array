(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var returnValue = function(inIndex, inValue, inTarget) {
    return inValue.getValue();
  };

  nx.sassList2array = function(inSassList, inCallback) {
    var callback = inCallback || returnValue;
    var length = inSassList.getLength();
    var array = [];
    for (var i = 0; i < length; i++) {
      array.push(callback(i, inSassList.getValue(i), inSassList));
    }
    return array;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.sassList2array;
  }
})();

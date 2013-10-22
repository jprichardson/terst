;(function(globals){

var isNode = false

//UMD
if (typeof define !== 'undefined' && define.amd) { //require.js / AMD
  define([], function() {
    return terst
  })
} else if (typeof module !== 'undefined' && module.exports) { //CommonJS
  module.exports = terst
  isNode = process && typeof process.pid  === 'number'
} else {
  globals.terst = terst //<script>
}

var terst = {autoMsg: false}

terst.T = function T (value, msg) {
  if (value) return

}

terst.F = function F (value, msg) { 
  if (!value) return

}

terst.EQ = function EQ (val1, val2, msg) {
  
}

terst.NEQ = function NEQ (val1, val2, msg) {
  
}

terst.APPROX = function APPROX (value, delta, msg) {
  
}



})(this);
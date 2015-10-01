const assert = require('assert');

var Kowa = require('../kowa')();

var p1 = new Promise(
  function(resolve, reject) {
    setTimeout(
      function() {
        resolve(1);
      }, Math.random() * 2000 + 1000);
});

var p2 = new Promise(
  function(resolve, reject) {
    setTimeout(
      function() {
        resolve(2);
      }, Math.random() * 2000 + 1000);
});

Kowa.spawn(function* () {
  console.log(yield p1);
  console.log(yield p2);
});

// external dependencies
module.exports = function () {

  function Kowa() {
     this.a = 5;
  }

  Kowa.prototype.one = function() {
    return 1;
  };

  return Kowa;
}
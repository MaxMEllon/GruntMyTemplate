(function() {
  var Hoge;

  Hoge = (function() {
    function Hoge() {}

    Hoge.prototype.hoge = function() {
      return console.debug("hoge");
    };

    return Hoge;

  })();

}).call(this);

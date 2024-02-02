function a() {
  var m;
  console.log(m);
  var m = 10;
  if (true) {
    var b = 10;
  }
  console.log(b);
}
a();

var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  console.log(x); // undefined
  x = "local value";
})();

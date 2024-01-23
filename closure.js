//closure is a combination of a function and its lexical scope bundled together

function outer() {
  var a = 10;
  function inner() {
    console.log(10);
  }
  return inner;
}

outer()();

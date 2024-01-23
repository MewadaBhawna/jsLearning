let counter = 1;
const getMethod = function (a) {
  console.log("call key " + counter++ + a);
};

const debounceMethod = function (func, late) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, late);
  };
};

const onKeyEnter = debounceMethod(getMethod, 2000, "testapi");

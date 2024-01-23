const getMethod = function () {
  console.count("function called");
};

const throttle = function (func, rate) {
  let flag = true;
  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, rate);
    }
  };
};

const enhanceMethod = throttle(getMethod, 1000);
window.addEventListener("resize", enhanceMethod);

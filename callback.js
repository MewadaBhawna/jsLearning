//callback is a function which can be passed as an argument in a function

function thisIsClosure() {
  // for data hiding we will enclose callback function in closure
  let count = 1;
  document
    .getElementById("btnClick")
    .addEventListener("click", function thisisCallback() {
      console.log("button clicked by " + count++ + " times");
    });
}

thisIsClosure();

//First class function
//Function can be used as values, can be passed as arguments and can be return

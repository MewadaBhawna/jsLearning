var cartItems = ["shampoo", "lipbalm", "oil", "face cream"];

function validateCart(cart) {
  return cart && cart.length > 0 ? true : false;
}

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const error = new Error("no items in cart");
      reject(error);
    }
    const createdOrderID = 1234;
    if (createdOrderID) {
      resolve(createdOrderID);
    }
  });
  return pr;
}
function proceedToPayement(orderID) {
  const pr = new Promise(function (resolve, reject) {
    const error = new Error("no orderID generated");
    orderID ? resolve("payment successfull") : reject(error);
  });
  return pr;
}
function showOrderSummary(cart) {
  const pr = new Promise(function (resolve, reject) {
    const error = new Error("order failed");
    cart && cart.length > 0 ? resolve(cart) : reject(error);
  });
  return pr;
}
createOrder(cartItems)
  .then(function (response) {
    console.log(response);
    return proceedToPayement(response);
  })
  .then(function (response) {
    console.log(response);
    return showOrderSummary(cartItems);
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err.message);
  });

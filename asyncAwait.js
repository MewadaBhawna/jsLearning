const p1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P1 resolved");
  }, 15000);
});

const p2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("P2 resolved");
  }, 10000);
});

async function getData() {
  const a = await p1;
  console.log(a);

  const b = await p2;
  console.log(b);
}

getData();

let funationABC = function () {
  console.log("function abc");
};

funationABC;

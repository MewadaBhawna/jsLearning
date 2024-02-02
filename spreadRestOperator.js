// syntax for both ...args, it conditionally become rest or spread operator
// spread operator spread array into individual values, refer below example

const arr = [1, 2, 3];

function sumTwo(a, b) {
  console.log(a, b);
  return a + b;
}

console.log(sumTwo(...arr)); //it behaves like sumTwo(1,2,3)

// rest operator bundles all passed value into an array, refer below example

function sumAll(...args) {
  let sum = 0;
  args.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(sumAll(1, 2, 3, 4, 5));

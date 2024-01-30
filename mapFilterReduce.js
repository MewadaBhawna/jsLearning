arr = [4, 1, 6, 2, 8];
arr1 = [
  { f: "Bhawna", l: "Rajput", a: 29 },
  { f: "Praveen", l: "Singh", a: 32 },
  { f: "Aditi", l: "Samadhiya", a: 29 },
  { f: "Shruti", l: "Mewada", a: 25 },
];

const mapExample = arr.map((a) => a * 2);

console.log(
  "map each element of array, perform function task and return a new array  " +
    mapExample
);

const filterExample = arr.filter((a) => a > 5);

console.log("filter is implemented conditionally " + filterExample);

// {29: 2, 32: 1, 25: 1}

const reduceExample = arr1.reduce((acc, curr) => {
  if (acc[curr.a]) {
    acc[curr.a] = acc[curr.a] + 1;
  } else {
    acc[curr.a] = 1;
  }
  return acc;
}, {});

console.log(reduceExample);

const filterExample2 = arr1.filter((ele) => ele.a < 30).map((val) => val.f);

console.log(filterExample2);

const reduceExample2 = arr1.reduce((acc, curr) => {
  if (curr.a < 30) {
    acc.push(curr.f);
  }

  return acc;
}, []);

console.log(reduceExample2);

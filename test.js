var removeDuplicates = function (nums) {
  let k = [...nums];
  nums.forEach((a, i) => {
    if (a === nums[i + 1] || a === nums[i - 1]) {
      nums.push(nums.splice(i, 1)[0]);
      console.log(nums);
      const index = k.indexOf(a);
      if (index > -1) {
        k.splice(index, 1);
      }
      console.log("k");
      console.log(k);
    }
  });
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

removeDuplicates(nums);

//call apply bind are sharing methods

const obj1 = {
  name: "Bhawna",
  x: function x(town, state) {
    console.log(this.name + " is from " + town + "," + state);
  },
};

obj1.x("Bhopal", "MP");

const obj2 = {
  name: "Shruti",
};

obj1.x.call(obj2, "Bhopal", "MP");

obj1.x.apply(obj2, ["Bhopal", "MP"]);

// bind return function that we can invoke later

const bindCheck = obj1.x.bind(obj2);
bindCheck("Bhopal", "MP");

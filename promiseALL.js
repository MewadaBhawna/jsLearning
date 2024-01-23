const URL1 = "https://api.github.com/users/bhawna";
const URL2 = "https://api.github.com/usershghj/praveen";

//const p1 = fetch(URL1);
//const p2 = fetch(URL2).catch((err) => console.log(err.message));

const output = Promise.allSettled([fetch(URL1), fetch(URL2)])
  .then((response) => {
    console.log(response);
    // console.log(response[0].json());
    //console.log(response[1].json());
  })
  .catch((err) => console.log(err.message));

// const fetchData = callback => {
//     setTimeout(() => {
//         callback("done");
//     }, 1500);
// };

// setTimeout(() => {
//     console.log("timer is done");

//     fetchData(text => {
//         console.log(text);
//     });
// }, 2000);

// console.log("hello");
// console.log("hi");


// this code can be done by using promise too i commented above file but it can be done both ways just uncomment above code if you want that style
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log('Timer is done!');
  fetchData()
    .then(text => {
      console.log(text);
      return fetchData();
    })
    .then(text2 => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
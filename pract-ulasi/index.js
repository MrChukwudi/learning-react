// let [first, second, third] = [1, 3, "Mine"];
// console.log(first, second, third);

let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let baseTime = `The time is ${hours}:${minutes}:${seconds}`;

let intervalId = setInterval(() => {
  console.log(baseTime);
}, 1000);

setTimOut(() => {
  clearInterval(intervalId);
}, 5000);

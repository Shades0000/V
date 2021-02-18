const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random()
for (let index = 0; index < 10; index++) {
  if (randomNumber > 0.7) {
    console.log(randomNumber);
  }
}
console.log("-----");
myArr = [1, 2, 3, 9, 8, 7];

for (let index = myArr.length; index > 0; index--) {
  console.log(myArr[index]);
}
console.log("-----");
for (const iterator of myArr) {
  console.log(iterator);
}
console.log("-----");
for (let index = 0; index < 10; index++) {
  if (randomNumber > 0.7 && randomNumber2 > 0.7 || randomNumber < 0.2 || randomNumber2 < 0.2) {
    console.log(randomNumber);
    console.log(randomNumber2);
    console.log("-----");
  }
  
}
const arr1 = [null, 2, 3, 4, "cat", { num: 25 }, undefined, 2];
const result1 = arr1;

const newArr = arr1.filter((item) => typeof item === "number" && item);

console.log(newArr.reduce((acc, num) => acc + num));

// console.log(result1);
//------------------------------------optimum way----------------------------------------------------

const arr = [null, 2, 3, 4, "cat", { num: 25 }, undefined, 2];

const result = arr
  .filter((item) => typeof item === "number" && item)
  .reduce((acc, num) => acc + num);

console.log(result);

// const arr1 = ["cat", " Mat"];
// const arr2 = ["fat", " bat"];
// const arr3 = ["hat", " rat"];

// console.log([...arr1, ...arr2, ...arr3]);

//-----------------------------------------------uniqArray----------------------------------------------------------------------------------------------

const arr1 = ["cat", " Mat"];
const arr2 = ["fat", " bat"];
const arr3 = ["hat", " rat"];
const arr4 = ["hat", " rat"];

const joinArr = [...arr1, ...arr2, ...arr3, ...arr4];

const uniqArr = [...new Set(joinArr)];

console.log(uniqArr);

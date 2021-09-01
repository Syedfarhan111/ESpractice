const FindAllDulicate = (arr) => {
  const newArr = [];
  arr.forEach((element, index) => {
    arr.indexOf(element) !== index && newArr.push(element);
  });
  return newArr;
};

console.log(
  FindAllDulicate([1, 5, 2, 6, 2, 4, 9, 7, 70, 45, 2, 98, 70, 98, 4])
);

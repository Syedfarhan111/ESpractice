const FindAllDulicate = (arr) => {
  const newArr = [];
  const sortedArr = [];
  arr.forEach((element, index) => {
    if (arr.indexOf(element) !== index) {
      newArr.push(element);
    } else {
      sortedArr.push(element);
    }
  });
  return {
    array: newArr,
    array2: sortedArr,
  };
};

console.log(
  FindAllDulicate([1, 5, 2, 6, 2, 4, 9, 7, 70, 45, 2, 98, 70, 98, 4])
);

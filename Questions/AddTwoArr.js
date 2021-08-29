const AddTwoArr = (arr1, arr2) => {
  arr1.map(
    (item, index) => item + (arr2[index] !== undefined ? arr2[index] : 0)
  );
};
console.log(AddTwoArr([1, 2, 3, 4, 5, 7, 9, 10], [7, 70, 6, 5]));
//------------------------------not completed---------------------------------------------------------------
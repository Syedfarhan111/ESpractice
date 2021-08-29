const FindSortUniqueArray = (objArr) => {
  let mergedArr = [];
  objArr.data.forEach((element) => {
    mergedArr = [...mergedArr, ...element];
  });
  const uniqueArr = [...new Set(mergedArr)].sort((a, b) => a - b);
  return uniqueArr;
};

console.log(
  FindSortUniqueArray({
    data: [
      [24, 75, 12, 14, 1],
      [35, 24, 13, 2],
      [7, 1, 75, 24, 15, 7],
      [98, 58, 4, 85, 58, 98],
      [-85, -4, -58, -58],
    ],
  })
);

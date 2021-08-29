const countOfStr = (str) => {
  const arrStr = str.split("");
  const newObj = {};

  arrStr.forEach((element) => {
    element != " " &&
      (newObj[element] === undefined
        ? (newObj[element] = 1)
        : newObj[element]++);-  
  });
  return newObj;
};

console.log(countOfStr("mine success is depend on your success"));

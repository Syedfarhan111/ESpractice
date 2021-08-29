const RemoveDuplicateFromSring = (str) => {
  ArrStr = str.split(" ");
  uniqArr = [...new Set(ArrStr)];
  return uniqArr.join(" ");
};

console.log(RemoveDuplicateFromSring("I am good,I want to go, I am "));

const findsquare = (num) => {
  let square = [];

  num.forEach((Element) => {
    square.push(Element ** 2);
  });
  return square;
};
console.log(findsquare([5, 2, 7, 9, 10]));

const find = (num) => {
  let squr = [];
  num.forEach((item) => {
    squr.push(item ** item);
  });
  return squr;
};
console.log(find([3, 5, 66, 7, 8]));

const relax = (num) => {
  let empty = [];
  num.forEach((item) => {
    empty.push(item ** 2);
  });
  return empty;
};
console.log(relax([3, 4, 5, 6, 7]));

const oklets = (num) => {
  const r = [];
  num.forEach((t) => {
    r.push(t ** 3);
  });
  return r;
};

console.log(oklets([4, 5, 6, 7]));





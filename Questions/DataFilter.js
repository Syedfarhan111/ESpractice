const arr1 = [1, undefined, "ather", 3, 5, {}, "cat", 56677, 3.56];

const arr2 = [];

arr1.forEach((Element) => {
  if (typeof Element === "string") {
    arr2.push(Element.toUpperCase());
  }
});

console.log(arr2);

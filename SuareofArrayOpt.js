const SquareofArrayOpt = (Number , power) => Number.map((element) => element ** power);

console.log(SquareofArrayOpt([4, 7, 9,  10, 11, 15 ] , 2));
console.log(SquareofArrayOpt([4, 7, 9,  10, 11, 15 ] , 3));
console.log(SquareofArrayOpt([4, 7, 9,  10, 11, 15 ] , 4));

const squareArray = ( numbers , power1) => numbers.map(( element) => element ** power1);
 
console.log(squareArray ([4, 7, 9,  10, 11, 15 ] , 4)); 
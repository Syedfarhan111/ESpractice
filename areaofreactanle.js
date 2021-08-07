const Areaofrectangle = (b, w) => b * w;

const areaoftringle = (b, h) => (1 / 2) * b * h;

const AreaofCircle = (r) => 3.14 * r * r;

// console.log(` Area of Rectangle is ${areaoftringle(10 ,20)}sq . unit`);

// console.log(` Area of rectangle ${Areaofrectangle(10,20)} sq. unit`);

// console.log(` Area of Circle is ${AreaofCircle(50)} sq. unit`);
// const x = 10;
// const b = 15;
// const h = 30;

// console.log(`Area of diagram III is ${areaoftringle(x ,b) + Areaofrectangle(b,h - x) }`);

// practice

const h = 14;
const b = 27;
const x = 12;
const r = 7;
const r2 = 5

console.log(`area of triangle ${Areaofrectangle(b-r,h) + areaoftringle(b-r,x) + AreaofCircle(7)/2 - AreaofCircle(r2)}`);
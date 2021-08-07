const fencingForRect=(b , w, numberOfWire, costPerFeet)=>{
 const parameter= b + w + b + w;
 const totalCoaast= parameter* numberOfWire*costPerFeet;
 return totalCoaast;
};

console.log(` Total cost for Fancin is Rs.${fencingForRect(20,30,7,12)}`);
const fencingForRect=(h , b, a, numberOfWire, costPerFeet)=>{
    const parameter= h + b + a ;
    const totalCoaast= parameter* numberOfWire*costPerFeet;
    return totalCoaast;
   };
   
   console.log(` Total cost for Fancin is Rs.${fencingForRect(10,12,18,5,10)}`);
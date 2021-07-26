// const FancingForAny = (edges, NumberOfWire, rate) =>{
//     let sum =0;
//     for(let i=0 ; i<edges.length ; i++ ){
//         sum = sum + edges[i];
//     } 
//     return sum * NumberOfWire * rate;
// };

// console.log( `cost of fancing is Rs.${FancingForAny([30, 20, 30,34,35,35,35], 5, 10)}`);


const FancingForAny = (edges, NumberOfWire, rate) =>{
    let sum =0;
    edges.foreach(element) => {

        sum = sum + element;
    } );
    return sum * NumberOfWire * rate;
};

console.log( `cost of fancing is Rs.${FancingForAny([30, 20, 30,34,35,35,35], 5, 10)}`);
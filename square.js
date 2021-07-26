const findsquare = ( num) =>{
    let square = []

    num.forEach((Element)=>
    {
        square.push(Element**2)
     });
    return square;
}

console.log(findsquare([5,2,7,9,10]));
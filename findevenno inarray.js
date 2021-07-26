// const Collectionsumofevent = (numbers) =>{
//     let sumEven =0;
//     let sumOdd =0;
//     numbers.forEach((element) =>{
//         element% 2== 0
//           ? (sumEven= sumEven + element)
//           : (sumOdd = sumOdd + element);
//     });
//  return `sum of even numbers=${sumEven} and sum pf odd number= ${sumOdd} total sum=${sumEven + sumOdd}`;
// };

// console.log(Collectionsumofevent( [30, 20, 30,34,35,35,35]));

const collection= ( num) => {
    let even = 0 ;
    let odd = 0 ;
    num.forEach(element => {
        num % 2 == 0
        ? ( even = even + element)
        : ( odd = odd + element );
    });
    return ` sum of even numbers${even} and sum of odd ${odd}  total sum=${even+odd}`;

}
console.log(collection([5,2,7,9,10]));
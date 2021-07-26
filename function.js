function sumdata(num1=0,num2=0){
    const sum= num1+num2;
    return sum;
}

console.log("sum of numbers:" + sumdata(40,30));     

function AddNumberOpt(num1,num2){
return num1+num2;
}
console.log(AddNumberOpt(20,30));
console.log("sum of given no" +AddNumberOpt(30,60));
console.log("sum of 10 and 15 is" +AddNumberOpt(10,15));
console.log(`############
sum of 
50+50= ${AddNumberOpt(30,60)}
 ##############`)
//
//
//  fat arrow function

const AddNumberOpt=(num1,num2) => num1+num2;
const AddNumberOpt=(num1,num2) => num1-num2;
const AddNumberOpt=(num1,num2) => num1*num2;

console.log(AddNumberOpt(20,30));
console.log("sum of given no" +AddNumberOpt(30,60));
console.log("sum of 10 and 15 is" +AddNumberOpt(10,15));
console.log(`############
sum of 
50+50= ${AddNumberOpt(30,60)}
##############`);

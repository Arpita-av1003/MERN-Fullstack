
function CalculateSum(number){
    if(number == 1){
        return number;
    }
    return number + CalculateSum(number-1);
}
const total =CalculateSum(10);
// console.log(total);


// Factorial
function Factorial(number1){
    if(number1 === 1){
        return number1;
    }
    return number1 * Factorial(number1-1);
}
const result =Factorial(5);
// console.log(result);


// Fabonacci
function Fabonacci(number2){
    if(number2 === 0 || number2 === 1){
        return number2;
    }
    return Fabonacci(number2 - 1) + Fabonacci(number2 - 2);

}
const Fab=Fabonacci(2);
// console.log(Fab);

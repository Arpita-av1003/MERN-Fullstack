const operator = '+';
const num1 = 10;
const num2 = 50;
let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;

  case '-':
    result = num1 - num2;
    break;

  case '*':
    result = num1 * num2;
    break;

  case '/':
    if (num2 === 0) {
      console.log("Cannot divide by zero.");
    } else {
      result = num1 / num2;
    }
    break;

  default:
    console.log("Error");
}
console.log(`The final result is ${result}`);

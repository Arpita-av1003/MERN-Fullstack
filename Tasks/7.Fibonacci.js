let num=8;
let num1 = 0;
let num2 = 1;
let sum;
    if (num === 1) {
        console.log(num1);
    } else if (num === 2) {
        console.log(num2);
        
    } else {
        for (let i = 3; i <= num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        console.log(num2);
    }

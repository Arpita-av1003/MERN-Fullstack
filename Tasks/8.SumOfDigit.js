let num=345;
let numStr = num.toString();
let sum = 0;

    for (let digit of numStr) {
        sum =sum+ parseInt(digit);
    }

    console.log(sum);
    
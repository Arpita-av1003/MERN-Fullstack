let num=2345;
let countDigit = 0;
for (let n = num; n > 0; n = Math.floor(n / 10)) {
     countDigit++;
}
console.log(countDigit);


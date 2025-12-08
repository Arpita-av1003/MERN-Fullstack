const readlineSync = require("readline-sync"); 
const n =Number(readlineSync.question("Enter the Number:"));
let sum =0;
for(let i=0;i<=n;i++){
    sum=sum+i;
}
console.log(`The sum is ${sum}`);

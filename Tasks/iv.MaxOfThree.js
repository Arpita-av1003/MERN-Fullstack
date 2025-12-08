const readlineSync = require("readline-sync"); 
const n1 =Number(readlineSync.question("Enter the 1st Number:"));
const n2 =Number(readlineSync.question("Enter the 2nd Number:"));
const n3 =Number(readlineSync.question("Enter the 3rd Number:"));
if(n1>n2 && n1>n3){
    console.log(`n1 which is ${n1} is maximum.`);
    
}else if(n2>n3 && n2>n1){
    console.log(`n2 which is ${n2} is maximum.`);
    
}else{
    console.log(`n3 which is ${n3} is maximum.`);
    
}
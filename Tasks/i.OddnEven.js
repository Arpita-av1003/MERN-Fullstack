const readlineSync = require("readline-sync"); 
const n =Number(readlineSync.question("Enter the Number:"));
if(n%2===0){
     console.log("The number is Even.");
}else{
    console.log("The number is Odd.");
    
}
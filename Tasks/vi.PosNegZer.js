const readlineSync =require("readline-sync");
const number =Number(readlineSync.question("Enter the number:"));
if(number>0){
    console.log("The number is positive");
    
}
else if(number<0){
    console.log("The number is negative");
    
}
else{
    console.log("The number is Zero.");
    
}
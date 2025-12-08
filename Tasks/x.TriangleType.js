const readlineSync =require("readline-sync");
const side1 =Number(readlineSync.question("Enter the length of side1:"));
const side2 =Number(readlineSync.question("Enter the length of side2:"));
const side3 =Number(readlineSync.question("Enter the length of side3:"));
if(side1==side2 && side2==side3){
    console.log("The triangle is an equilateral triangle.");
    
}else if(side1==side2 || side2==side3 || side3==side1){
    console.log("The triangle is isosceles triangle. ");
    
}else{
    console.log("The triangle is scalene triangle");
    
}
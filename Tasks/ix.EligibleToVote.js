const readlineSync =require("readline-sync");
const age= Number(readlineSync.question("Enter  your age:"));
if(age>=18){
    console.log("Can give vote");
}else{
    console.log("Can't vote");
}
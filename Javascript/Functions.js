// pure function
// function DoubleNumber (num){
//     return num*2;
// }
// const result=DoubleNumber(4);
// console.log(result);

// Impure function (result depends on external factors)
// const x=4;
// function getValue(n){
//     return n*2*x;
// }
// const output=getValue(5);
// console.log(output);

// function getarray(arr){
//     let newarr = [];
//     newarr.push(...arr,5,6);
//     return newarr;
// }
// const arrresult= getarray([1,2,3,4]);
// console.log(arrresult);

// First class function

// 01
// const greet=function (){
//     console.log("Hello! How are you Arpita?");
    
// }
// greet();  


// 02
// function wrapper(){
//     return " Welcome here";
// }
// function greetMessage(inner, name){
//     let message = inner()
//     console.log(name, message);
    
// }
// greetMessage(wrapper,"Arpita");


// 03
// function greetings() {
//     function wrapper() {
//         let name= "Arpita";
//         console.log(name,"Hello! What's up?");
        
//     }
//     return wrapper;
// }
// const sayHello = greetings(); 
// sayHello(); 


// Higher order Function
// function displayMessage(){
//     return function(){
//         console.log("Hello from the inner function");
        
//     }
// }
// const output = displayMessage();
// output();


// const arr =[1,2,3,4];
// function squareOfNumber(arr){
//     let squaredNumber =[];
//     for (let number of arr){
//         squaredNumber.push(number** 2)
//     }
//     return squaredNumber;
// }
// const output= squareOfNumber(arr);
// console.log(output);



// const arr = [1, 2, 3, 4, 5];
// function calculatePower(wrapper, arr) {
//     const tempArr = [];
//     for (let number of arr) {
//         tempArr.push(wrapper(number));
//     }
//     return tempArr;
// }

// function square(number) {
//     return number ** 2;
// }

// function cube(number) {
//     return number ** 3;
// }

// function quad(number) {
//     return number ** 4;
// }

// const squaredNumbers = calculatePower(square, arr);
// console.log(squaredNumbers); 

// const cubedNumbers = calculatePower(cube, arr);
// console.log(cubedNumbers); 

// const QuadNumbers = calculatePower(quad, arr);
// console.log(QuadNumbers); 


// Mpap  fun
// const arr =[1,2,3,4,5];
// function square(number) {
//      return number ** 2;
// }
// const output= arr.map(square);
// console.log(output);

// const arr =[1,2,3,4,5];
// const Cube = arr.map((number)=> number**3);
// console.log(Cube);


// filter fun
// const arr =[1,2,3,4,5,6,7,8,9];
// const filterNo =arr.filter((Number)=>(Number>5));
// console.log(filterNo);


// Reduce funtion

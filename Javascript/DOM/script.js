console.log("JS is connected!");

// button evnt.........................................
// let strtBtn = document.getElementById("btn-start");
// console.log(strtBtn);

// let stopBtn = document.getElementById("btn-stop");
// console.log(stopBtn);


// let ResetBtn = document.getElementById("btn-rese1");
// console.log(resetBtn);

// let start = document.querySelector(".start");
// console.log(start);

// let resetBtn = document.querySelector("#btn-reset");
// console.log(resetBtn);

// let button = document.querySelectorAll(".button");
// console.log(button[0]);

// const startBtn = document.getElementById('btn-start');
// const stopBtn = document.getElementById('btn-stop');
// const resetBtn = document.getElementById('btn-reset');
// const display = document.querySelector('.title'); // To update the text

let startbtn = document.querySelector(".start");
let countBtn = document.querySelector(".count");
let stopBtn = document.querySelector(".stop");
let value =0;

// function showMessage(){
//     console.log("Button Clicked");
    
// }


// // startbtn.addEventListener("click", showMessage);

// startbtn.addEventListener("click",() => {
//     // startbtn.innerText = "Begin";
//     // console.log("Clicked button");
//     if(startbtn.innerText === "Start"){
//         startbtn.innerText = "Begin";
//     }else{
//         startbtn.innerText = "Start";
//     }
// });

// countBtn.addEventListener("click", () => {
//     value++;
//     console.log(value);
    
// });

// stopBtn.addEventListener("click", () => {
//     // stopBtn.classList.add("btn-red");
//     stopBtn.classList.toggle("btn-red");
// });


// input event............................................
let input = document.querySelector(".input");
// input.addEventListener("focus",() =>{
//     console.log(input.value);
    
// });

// mouse event............................................
// input.addEventListener("mousedown",(event)=>{
//     console.log(event.button);
    
// });

// input.addEventListener("mousedown", (event) => {
//     // let xcor =event.pageX;
//     let xcor =event.clientX;
//     let ycor = event.clientY;
//     let cors = `X cor -${xcor}, y cor - ${ycor}`;
//     console.log(cors);
    
// });

document.body.addEventListener("mousedown", (event) => {
    // let xcor =event.pageX;
    let xcor =event.clientX;
    let ycor = event.clientY;
    let cors = `X cor -${xcor}, y cor - ${ycor}`;
    console.log(cors);
    
});


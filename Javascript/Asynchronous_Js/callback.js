// function a(wrapper){
//     console.log("Hello");
//     wrapper();
// }
// function b(){
//     console.log("bye");
    
// }

console.log("Hello");
setTimeout(function callback(){
    console.log("Executed after a delay");
    
}, 4000);

BigInt.addEventListener("click",function(){
    console.log("clicked");
    
});

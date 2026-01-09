// const URL = "https://github.com";
// let promise = fetch(URL);
// promise
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function () {
//     console.log("Error Occured");
//   });

// let promise1 = new Promise((resolve, reject)=>{
//    let success = true;
//    if(success){
//       resolve("Promise fulfilled");
//    }else{
//       reject("promise Rejected");
//    }
// });
// promise1.then((message)=>{
//    console.log("The ka msg is" + message);
   
// }).catch((error)=> {
//    console.log("Error:" + error);
   
// });

const isRequestSuccessful = false;
const db =[
   {id:1 , name:"Arpita"},
   {id:2, name:"Arshi"},
];
let promise = new Promise((resolve, reject)=> {
   if(isRequestSuccessful){
      setTimeout(()=> resolve(db), 3000);
   }else{
      const error= new Error("Something went wrong");
      reject(error.message);
   }
});
// console.log(promise);
promise
    .then((response) => console.log(response))
    .catch(function (err){
      console.log(err);
      
    });



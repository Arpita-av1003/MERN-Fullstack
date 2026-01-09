let promise1 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise1 resolved"),1000)
);
let promise2 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise2 resolved"),2000)
);
let promise3 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise3 resolved"),3000)
);

// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// promise3.then((res) => console.log(res));
let arrOfpromises =[promise1, promise2, promise3];
let promise = Promise.all(arrOfpromises);
// console.log(promise);
promise.then((res)=> console.log(res));


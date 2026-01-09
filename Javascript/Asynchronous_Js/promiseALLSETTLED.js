let promise1 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise1 resolved"),1000)
);
let promise2 =new Promise((_,rejected) =>
   setTimeout(()=> rejected(new Error ("Promise2 resolved")),2000)
);
let promise3 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise3 resolved"),3000)
);

let arrofpromises =[promise1, promise2, promise3];
let promise = Promise.allSettled(arrofpromises);
promise.then((response) => response.forEach((data)=> console.log(data)));
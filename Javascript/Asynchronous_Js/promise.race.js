let promise1 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise1 resolved"),3000)
);
let promise2 =new Promise((_,rejected) =>
   setTimeout(()=> rejected(new Error ("Promise2 resolved")),2000)
);
let promise3 =new Promise((resolve) =>
   setTimeout(()=> resolve ("Promise3 resolved"),1000)
);

let arrofpromises =[promise1, promise2, promise3];
let promise = Promise.race(arrofpromises);
// promise.then((res)=> console.log(res));

let promiseany =Promise.any(arrofpromises);
promiseany.then((res)=> console.log(res));

// let promise =new Promise((resolve)=> resolve("done"));
// promise.then((res)=> console.log(res)).catch((err)=> console.log(err));

// async function returnSomething(){
//     return "pratiksha";
// }
// const result = returnSomething();
// console.log(result);

// async function showResponse() {
//    try{
//      let promise = new Promise((res,rej)=> rej("promise rejected"));
//     let result = await promise;
//     console.log(result);
//    }catch(err){
//     console.log(err);
//    }
// }
// showResponse();.

const getUserData = async()=> {
    try{
        const promise = fetch("https://mockdata.prakashsakari.repl.co/users");
        // console.log(promise);
        const data =await promise;
        const response = await data.json();
        console.log(response);
    }catch(err){
        console.log(err);
        
    }

};
getUserData();

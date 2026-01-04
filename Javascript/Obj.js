// Object literals....................
// const obj1={};
// console.log(typeof(obj1));

// const PersonalData={
//     Sname:"Arpita",
//     age:22,
//     job:"Unemployed",
//     course:["HTML","CSS","JS","Reactjs"],
//     "Is Admin":"true",
// };
// // console.log(PersonalData);
// console.log(PersonalData.age);
// console.log(PersonalData["Is Admin"]);
// console.log(PersonalData.Sname);

// const obj={
//     name:"Arpita",
//     greetMessage:function obj(){
//         console.log("Hi! How are you?");
        
//     },
//     Hello(){
//         console.log("Tata bye bye");
        
//     }
// }
// obj.Hello();
// obj.greetMessage();

// Computed properties....................................
// const readlineSync =require("readline-sync");
// const key = readlineSync.question("What do you want to know about Mentor?");

// const obj ={
//     name :"Arpita",
//     age: 22
// }
// obj.city ="Noida";
// obj.State="U.p";
// console.log(obj[key]);

// Shorthand property...............................................
// function obj(name,city){
//     return{
//         name:name,
//         city:city,
//     }
// }
// let result=obj("Arpita","Agra");
// console.log(result);


// const studentname="Arpita";
// const Course ="CSE(AI)";
// console.log({studentname,Course});

// const obj ={
//     fruit:"Orange",
//     taste:"Sour"
// }
// const isKeyPresent= "fruit" in obj;
// console.log(isKeyPresent);

// for(let key in obj){
//     console.log(key,obj[key]);
    
// }

// Shallow copy...........................................
// const Person1={
//     name:"Appu",
//     Section:"Ai-43"
// }
// console.log(Person1);
// const Person2= Person1;
// Person2.name="Archita";
// console.log(Person1);
// // console.log(Person2);

// const Person1={
//     name:"Appu",
//     Section:"Ai-43",
//     Address:{
//         city:"Varanasi",
//         State:"U.P."
//     }
// }
// const Person2=Object.assign({},Person1);
// Person2.name="Rohini";
// Person2.Address.city="Haryana";
// console.log(Person1);
// console.log(Person2);


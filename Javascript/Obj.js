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

// Optional Chaining..................................
// const user={
//     Pname:"Arpita",
//     Age:22,
//     Sec:"AI-43",
//     address:{
//         state:"U.P",
//         City:"Varanasi",
//     },
//     location:"India",
//     getMessage(){
//         console.log("Hi Arpita ,How are you?");
        
//     }
// };
// console.log(user.address);
// console.log(user.address.City);
// console.log(user.address.hobbies);


// Sol_1
// if(user.address !== undefined){
//     console.log(user.address.City);
    
// }else{
//     console.log("Address not found");
    
// }

// Sol_2
// console.log(user.address?.City);

// user.getMessage();
// console.log(user.getAddress?.());


// Object destructuring..................................
// let obj={
//     name: "Arpita",
//     address:{
//         city:"Varanasi",
//         State:"U.P.",
//         Country:"India",
//     },
//     courses:['HTML','CSS','JS','Reactjs'],
// };
// let{name,address,courses}= obj;
// let{name, ...rest}=obj;
// console.log(rest);

// let{name: userName} = obj;
// console.log(userName);

// let {address:{city}} =obj;
// console.log(city);

// Object Methods..........................................
// entries
// const obj={
//     name:"Appu",
//     age:22,
//     City:"Mumbai",
// };
// const entries = Object.entries(obj);
// console.log(entries);

// const keys =Object.keys(obj);
// console.log(keys);

// const values =Object.values(obj);
// console.log(values);


// this keyword.........................................
// const obj ={
//     name:"Arpit",
//     displayMessage: function () {
//         console.log(this);
//     },
// };
// obj.displayMessage();


// constructor new..........................
// function User(name,age){
//     (this.name=name),(this.age = age);

// }
// const user1 =new User("Arpita",101);
// const user2 = new User("Ashi",11);

// console.log(user1);
// console.log(user2);


// Function borrowing...................
// const user1 ={
//     name: "Arpita",
//     age: 90,
// };

// const user2 ={
//     name: "Archita",
//     age: 10,
// };

// const user3 ={
//     name: "Asmita",
//     age: 9,
// };

// function sayHi(degree, year){
//     console.log(this.name , degree, year);
    
// }

// sayHi.call(user1, "B.Tech",2000);
// sayHi.call(user2, "B.Tech",2030);

// sayHi.apply(user1, ["Btech",2300]);
// sayHi.apply(user3,["btech",2233]);

// const result =sayHi.bind(user3,"Btech",2999);
// result();,l
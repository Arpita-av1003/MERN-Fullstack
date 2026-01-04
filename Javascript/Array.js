// iterating over array..............................
// let Student=["Appu","Arpita","Sakshi","Smriti","Nishant","Chiku","Shreyansh"];
// console.log(Student[0]);
// console.log(Student[1]);
// console.log(Student[2]);
// console.log(Student[3]);


// let arrlength=Student.length;
// for (let i=0;i<arrlength;i++){
//     console.log(Student[i]);
// }


// for let of.. gives value
// for(let item of Student){
//     console.log(item);
// }

// for let in gives index
// for(let index in Student){
//     console.log(index);
// }

// push and concatenate..........................
// let fruits=["Apple","Banana","Chiku","Date","Emli","Fig","Grapes"];
// fruits.push("Lichi");
// fruits.push("orange","kiwi","pineapple");
// console.log(fruits);

// let arr1=[1,2,3,4];
// let arr2=[6,7,8,9];
// let arr3=arr1.concat(arr2);
// let arr4=arr1.concat(arr2,arr3);
// console.log(arr4);

// pop,slicw,splice...........................
// let courses=["HTML","CSS","JAVASCRIPT","REACTJS","JQUERY"];
// console.log(courses);
// let removedItem=courses.pop();
// console.log("RI-",removedItem);
// console.log("Updated Courses-",courses);

// let shallowCopy=courses.slice(1,4);
// console.log(shallowCopy);
// console.log(courses);

// let userNmae="ARPITA";
// // let firstUpperCaseChar =userNmae[0].toUpperCase();
// let capitalise=firstUpperCaseChar +userNmae.slice(1).toLowerCase();
// console.log(capitalise);

// let fruit=["Apple","Banana","orange","Grapes","Pineapple"];
// // fruit.splice(2,3);
// // console.log(fruit);
// fruit.splice(3,1,"Lemon");
// console.log(fruit);

// sort().....................................
// const fruits =["pple","banana","cherry","orange","berries"];
// fruits.sort();
// console.log(fruits);

// const numbers =[1,2,6,7,4,11,99,56,78];
// function sortinascend(a,b){
//     return a - b;
// }
// function sortindes(a,b){
//     return b -a;
// } 

// numbers.sort(sortinascend);
// console.log(numbers);

// split n join.....................
// const inputStr= "madam";
// const arrOfChar = inputStr.split("");
// arrOfChar.reverse();
// const reversedStr =arrOfChar.join("");
// console.log(reversedStr);

// spread.................
// const arr1=[1,2,3,4,5,6];
// const arr2 =[8,9];
// const arr3=[...arr1,7,...arr2,10,11];
// console.log(arr3);


// Destructing array........................................
// const num =[1,2,3];
// const[a,b,c]=[1,2,3];
// console.log(a);
// console.log(b);
// console.log(c);

// const arr =[1,2,3,["html","css","js"],4,5];
// const[, , , Courses,a,]=arr;
// console.log(a);
// console.log(Courses);

// let a=5;
// let b=10;
// [a,b]=[b,a];
// console.log(a);
// console.log(b);

// let arr1=[1,2,3,4];
// let arr2=[...arr1];
// arr2.push(6);
// console.log(arr1);
// console.log(arr2);

// let arr3=[1,2,3,4,5];
// let arr4=[];
// for(let item of arr3){
//     arr4.push(item);
// }
// // console.log(arr3);
// // console.log(arr4);
// arr4.push(11);
// console.log(arr4);



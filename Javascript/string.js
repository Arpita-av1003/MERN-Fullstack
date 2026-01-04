// Iteration
// let stringS ="I am Arpita";
// for(let char of stringS){
//        console.log(char);
// }

// let str="Hello Appu!";
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }
 
// let str1="Hello World!";
// str1.split('').forEach((char,index)=>{
//       console.log(`${index}:${char}`);
      
// });    

// let str2="Hi Appu";
// for(let index=0;index<str2.length;index++){
//     console.log(str2.charAt(index));
    
// }


// includes()
// const msg ="  I am in a big Problem";
// // console.log(msg.includes("am"));
// if(msg.includes("am")){
//     console.log("yes");
    
// }else{
//     console.log("no");
    
// }


// const str ="I have this problem which creates a load.";
// const vowels ="aeiouAIOUE";
// for(let char of str){
//     if(vowels.includes(char)){
//         console.log(`${char} is a vowel`);
        
//     }
// }

// const str ="I have this problem which creates a load.";
// const vowels ="aeiouAIOUE";
// let flag =false;

// for(let char of str){
//     if(vowels.includes(char)){
//         flag =true;
//         break;
//     }else{
//         flag=false;
//     }
// }
// if (flag === true){
//     console.log("String has vowels");
    
// }else{
//     console.log("String does not have vowels");
    
// }

// toUppercase and toLowercase
// const str="Arpita";
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// substring
// const userName ="Arpita Singh";
// const subString =userName.substring(0,10);
// console.log(subString);


class Solution {
    alphabets(c1, c2) {
        let result = "";
        let start = c1.charCodeAt(0);
        let end = c2.charCodeAt(0);

        for (let i = start; i <= end; i++) {
            // Append the character and a space
            result += String.fromCharCode(i) + " ";
        }

        // .trim() removes the trailing space at the end
        return result.trim();
    }
}

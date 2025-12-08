let num=2345;
let numStr = num.toString();
let reversedStr = '';
for (let i = numStr.length - 1; i >= 0; i--) {
        reversedStr += numStr[i];
    
}
console.log(reversedStr);

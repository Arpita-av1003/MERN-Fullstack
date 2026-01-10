const arr = [1, 2, 3, 4, 5];
function callback(number) {
    return number ** 2;
}


// const sqr =arr.map((number)=> number ** 2);

// console.log(sqr);

// let tempArr=[];
// for(let i=0; i<arr.length; i++){
//              tempArr.push(arr[i] ** 2)
// }
// console.log(tempArr);


Array.prototype.myMap = function(callback) {
    let tempArr = [];
    for (let i = 0; i < this.length; i++) {
        tempArr.push(callback(this[i]));
    }
    return tempArr;
};
const sqr1 = arr.myMap(callback); 

console.log(sqr1);





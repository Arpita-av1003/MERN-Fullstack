if (!Array.prototype.filter) {
    Array.prototype.filter =
        function (callback, thisArg) {
            if (typeof callback !== 'function') {
                throw new TypeError(callback +
                    ' is not a function');
            }
            let resultArray = [];
            for (let i = 0; i < this.length; i++) {
                if (i in this) {
                    
                    if (callback.call(thisArg,
                        this[i], i, this)) {
                        resultArray.push(this[i]);
                    }
                }
            }
            return resultArray;
        };
}
let numbers = [1, 2, 3, 4, 5, 6];
function isEven(number) {
    return number % 2 === 0;
}
let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);
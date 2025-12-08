let n = 17;
let isprime=true;
if (n <= 1) {
    console.log("Not a prime");
    isprime==false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            console.log("A prime");
            isprime==true;
            break;
        }
    }
}
console.log(isprime? `${n} is prime`:`${n} is not prime`);

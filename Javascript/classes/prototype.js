// prototypes.............................................
const loggedInStatus ={
    isloggedIn: false,
};

const admin={
    isAdmin: true,
    __proto__: loggedInStatus,
    showMessage() {
        console.log(this.isAdmin);
        
    },
};

const user ={
    name:"Arpita",
    age:22,
    __proto__: admin,
};

console.log(user);
console.log(user.isloggedOut);
user.showMessage();
console.log(Object.keys(user));

for(let key in user){
    console.log(key);
    
};


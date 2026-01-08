// classes..................................................
class User {
    constructor(name , role, isAdmin, isLoggedIn){
        (this.name =name),
        (this.role =role),
        (this.isAdmin = isAdmin),
        (this.isLoggedIn= isLoggedIn);
    }
    displayInfo(){
        console.log(`${this.name} is a ${this.role}`);
        
    }
};

const user1 =new User("Panchhi","Developer",false,true);
const user2 =new User("Ashi","Ui designer",false,true);
console.log(user1.displayInfo());
console.log(user2);





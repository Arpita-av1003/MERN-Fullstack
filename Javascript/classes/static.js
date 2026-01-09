
class Children {
    static id =1;
    constructor(name, age,id){
        this.name = name;
        this.age = age;
        this.id=Children.id++;
    }
    static sortByAge(a,b){
        return a.age - b.age;
    }
}

const child1= new Children("Akki",19);
const child2= new Children("Anni",29);
const child3= new Children("Arshi",10);

// let arr=[child1,child2,child3];
// console.log(arr.sort(Children.sortByAge));



class Person {
 static count = 0;
 constructor(name) {
   this.name = name;
   Person.count++;
 }
}
let person1 = new Person('John');
let person2 = new Person('Jane');
let person3 = new Person('Jack');
// console.log(person1.count); 
// console.log(Person.count); 
// console.log(person2.count); 
// console.log(Person.count); 
// console.log(person3.count);



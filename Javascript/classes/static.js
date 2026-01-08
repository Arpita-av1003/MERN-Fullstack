
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

let arr=[child1,child2,child3];
console.log(arr.sort(Children.sortByAge));

// inheritance......................................

// parent
class Laptop{
    constructor(ram , processor, generation){
        this.ram = ram;
        this.processor=processor;
        this.generation=generation;
    }
   
};

// child
class Dell extends Laptop{
     constructor(ram , processor, generation, modelName,price){
        super(ram, processor, generation);
        this.modelName = modelName;
        this.price = price;
    }
     displayMessage(){
        console.log(`Laptop Spec:: Ram -${this.ram} , Processor ${this.processor} , ${this.generation} Gen , Modelname- ${this.modelName} , Price-${this.price}`);
        
    }
}

const dell1= new Dell("8GB","Intel","i5", "DellLattitude" ,"45000");
dell1.displayMessage();


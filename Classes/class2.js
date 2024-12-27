
//child class
class Pizza {
    constructor(typePizza,sizePizza,pricePizza) {
        this.size = sizePizza;
        this.crust = "original"
        
    }

    getCrust(){
        return this.crust;
    }

    setCrust(crustPizza){
        this.crust = this.crustPiza
    }
}

class specialPizza extends Pizza{
    constructor(sizePizza){
        super(sizePizza)
        this.type = "Margherita"

    }

    slice(){
        console.log(`Our ${this.type} ${this.size} pizza is sliced into 8 pieces`);
    }
}

const myspecialPizza = new specialPizza("Large")
myspecialPizza.slice();
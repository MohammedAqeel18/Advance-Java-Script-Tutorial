class Pizza {
    constructor(typePizza,sizePizza,pricePizza) {
        this.type = typePizza;
        this.size = sizePizza;
        this.price= pricePizza;
        this.toppings=[]      
    }

    gettoppingsPizza(){
        return this.toppings;
    }

    settoppingsPizza(toppingsPizza){
        this.toppings.push  (toppingsPizza);
    }
 bake(){
    return console.log(`Baking a ${this.size} ${this.type} ${this.toppings} pizza : price is  ${this.price} `);
 }

}

const newPizza = new Pizza("Cheese","Large" , "2000.00")
newPizza.settoppingsPizza("mutton") 
newPizza.settoppingsPizza("egg") 
newPizza.bake();
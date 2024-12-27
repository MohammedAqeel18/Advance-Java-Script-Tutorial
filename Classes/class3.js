class Pizza {
    crust = "original";
    #sauce = "tomato"; // private field

    constructor (sizePizza) {
        this.size = sizePizza;
    }
    getCust() {
        return this._crust;
    }
    setCust(crustPizza) {
        this._crust = crustPizza;
    }

bake() {
    return console.log(`Your ${this.size} ${this.crust} ${this.#sauce} pizza is baking`);
}
}

const myPizza = new Pizza("Medium");
myPizza.bake();
console.log(myPizza.crust);
class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = '3'
        this.strength = '3'
    }

    sayName() {
        console.log(`My name is ${this.name}`)
    }
    showStats() {
        console.log(this.name, this.strength, this.speed, this.health)
    }
    drinkSake() {
        this.health += 10
        console.log(`My health is ${this.health}`)
        return this
    }
}

class Sensei extends Ninja {
    constructor(name, health) {
        super(name, health);
        this.wisdom = '100';
    }
    speakWisdom(){
        super.drinkSake();
        console.log(`My health is ${this.health} and I am wise`)
    }
}



const ninja1 = new Ninja("Hyabusa", 100);
const ninja2 = new Sensei("John", 100);
console.log(ninja2.health)
console.log(ninja2.wisdom)
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja2.speakWisdom();



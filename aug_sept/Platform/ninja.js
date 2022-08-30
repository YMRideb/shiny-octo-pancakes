class Ninja{
    constructor(name, health = 100, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        return console.log(`My name is ${this.name}. but you can call me Senpai.`)
    }

    showStats(){
        return console.log(`Here are my stats: \n Health = ${this.health} \n Speed = ${this.speed} \n Strength = ${this.strength}`);
    }
    drinkSake(health){
        this.health += 10;
        console.log("\"Haiboku-o a-ji-a-wa se te-aru....\"")
        return console.log(`Now my health is ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name, health = 210, speed = 10, strength = 10, wisdom = 10) {
        super(name);
        this.health = health;
        this.speed = speed;
        this.strength = strength;
        this.wisdom = wisdom;
    }
    speakWisdom(){
        return console.log(`What one programmer can do in one month, two programmers can do in two months. And there is no spoon.`)
    }
    senseiShowStats(){ //how can i use super right here??
        return console.log(`Here are my stats: \n Health = ${this.health} \n Speed = ${this.speed} \n Strength = ${this.strength} \n Wisdom = ${this.wisdom}`);
    }
    // senseiShowStats(){
    //     const show = super.showStats();
    //     console.log(`${show} + \nWisdom = ${this.wisdom}`);
    // }
}

const ninja1 = new Ninja("Bruce", )
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
console.log("******************************************************************")
const superSensei = new Sensei("Rukia Kuchiki");
superSensei.sayName();
superSensei.speakWisdom();
superSensei.senseiShowStats();
superSensei.drinkSake();


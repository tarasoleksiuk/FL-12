/* Your code goes here */
//Функція-конструктор
function Fighter(object) {
    //Змінна 
    let name = object.name;
    //Доступ до змінної через функцію
    this.getName = function () {
        return name;
    }
    //Запуск замикання
    this.getName();


    let damage = object.damage;
    this.getDamage = function () {
        return damage;
    }
    this.getDamage();


    let strength = object.strength;
    this.getStrength = function () {
        return strength;
    }
    this.getStrength();

    let agility = object.agility;
    this.getAgility = function () {
        return agility;
    }
    this.getAgility();


    let health = object.hp;
    this.getHealth = function () {
        return health;
    }
    this.getHealth();


}
const myFighter = new Fighter({ name: 'Maximus', damage: 25, hp: 100, strength: 30, agility: 25 });

// let one = myFighter.name;
// console.log(one); // undefined
// let name1 = myFighter.getName();
// console.log(name1);


// let dem = myFighter.damage;
// console.log(dem); // undefined
// let dem1 = myFighter.getDamage();
// console.log(dem1);

// let str = myFighter.strength;
// console.log(str); // undefined
// let str1 = myFighter.getStrength();
// console.log(str1);

// let hps = myFighter.health;
// console.log(hps); // undefined
// let hps1 = myFighter.getHealth();
// console.log(hps1);

// let agl = myFighter.agility;
// console.log(agl); // undefined
// let agl1 = myFighter.getAgility();
// console.log(agl1);
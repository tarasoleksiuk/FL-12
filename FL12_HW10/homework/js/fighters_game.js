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
    //Зменшити життя на n-одиниць
    this.decreaseHealth = function (decreaseOnNumber) {
        health = health - decreaseOnNumber;
    }

    //Wins and losses counts
    let wins = 0;
    let losses = 0;

    this.logCombatHistory = function () {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    }
    this.heal = function (addHpNumber) {
        let totalHp = 100;
        if (addHpNumber + health > totalHp) {
            health = totalHp;
        } else {
            health = addHpNumber + health;
        }
    }

    this.dealDamage = function (reduceHpNumber) {
        let ZeroHp = 0;
        if (health - reduceHpNumber < 0) {
            health = ZeroHp;
        } else {
            health = health - reduceHpNumber;
        }
    }

    this.addWin = function () {
        wins++;
    }

    this.addLoss = function () {
        losses++;
    }

    //atatack-function

    this.attack = function (defFighter) {
        let randomNumber = Math.floor(Math.random() * 100 + 1);
        let defFighterStrength = defFighter.getStrength();
        let defFighterAgility = defFighter.getAgility();
        let successProbabolity = 100 - (parseInt(defFighterStrength) + parseInt(defFighterAgility));

        if (successProbabolity > randomNumber) {
            defFighter.decreaseHealth(damage);
            console.log(`${name} makes ${damage} to ${defFighter.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }

    }
}
const fighter1 = new Fighter({ name: 'Maximus', damage: 20, hp: 100, strength: 20, agility: 15 });

const fighter2 = new Fighter({ name: 'Commodus', damage: 25, hp: 90, strength: 25, agility: 20 });





// fighter1.attack(fighter2);
// console.log(fighter2.getHealth());
// fighter1.attack(fighter2);
// console.log(fighter2.getHealth());
// fighter1.attack(fighter2);
// console.log(fighter2.getHealth());
// fighter1.attack(fighter2);
// console.log(fighter2.getHealth());


// console.log(myFighter.getHealth());
// myFighter.dealDamage(20);
// console.log(myFighter.getHealth());
// myFighter.logCombatHistory();


// myFighter.addLoss();
// myFighter.logCombatHistory();
// myFighter.addWin();
// myFighter.logCombatHistory();

// myFighter.logCombatHistory();
// console.log(myFighter.getHealth());
// myFighter.heal(30);
// console.log(myFighter.getHealth());



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

// let log = myFighter.wins;
// console.log(log); // undefined
// let log1 = myFighter.logCombatHistory();
// console.log(log1);
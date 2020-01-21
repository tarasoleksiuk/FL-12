function Fighter(object) {
    let name = object.name;
    this.getName = function () {
        return name;
    }
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
    this.decreaseHealth = function (decreaseOnNumber) {
        health = health - decreaseOnNumber;
        if (health < 0) {
            health = 0;
        }
    }

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

    this.attack = function (defFighter) {
        const ONE_HUNDRED = 100;
        let randomNumber = Math.floor(Math.random() * ONE_HUNDRED + 1);
        let defFighterStrength = defFighter.getStrength();
        let defFighterAgility = defFighter.getAgility();
        let successProbabolity = ONE_HUNDRED - (parseInt(defFighterStrength) + parseInt(defFighterAgility));

        if (successProbabolity > randomNumber) {
            defFighter.decreaseHealth(damage);
            console.log(`${name} makes ${damage} to ${defFighter.getName()}`);
        } else {
            console.log(`${name} attack missed`);
        }

    }
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0) {
        console.log(`${firstFighter.getName()} is dead and can't fight.`);
    }
    if (secondFighter.getHealth() === 0) {
        console.log(`${secondFighter.getName()} is dead and can't fight.`);
    }

    while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
        if (secondFighter.getHealth() === 0) {
            console.log(`${firstFighter.getName()} has won!`);
            firstFighter.addWin();
            secondFighter.addLoss();
            break;
        }
        secondFighter.attack(firstFighter);
        if (firstFighter.getHealth() === 0) {
            console.log(`${secondFighter.getName()} has won!`);
            secondFighter.addWin();
            firstFighter.addLoss();
            break;
        }
    }
}

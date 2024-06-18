'use strict'

/**
 * Creeati o clasa cu inamic care are sanatate 
 * si metoda de primire a demage a inmicului
 * Creati o clasa pentru sabie, care are puterea si 
 * metoda de demage
 * Creati calsa orkului, care in 50% din cazuri 
 * nu primeste demage.
 */

class Enemy {
    health //(sanatate) o facem privata
    constructor(health) {
        this.health = health
    }

    recieveDamage(demage) {
        this.health = this.health - demage
        if (this.health > 0) {
            console.log(this.health)
        } else {
            console.log('Simple enemy is Dead!!!')
        }
    }
}

class Sword {
    #damage
    constructor(damage) {
        this.#damage = damage
    }

    strike(enemy) {
        enemy.recieveDamage(this.#damage)

    }
}

class Orc extends Enemy { //'Orc' este un caz aparte de 'Enemy'
    constructor(health) {
        super(health)
    }

    recieveDamage(demage) {
        if (Math.random() > 0.5) { //in 50% din cazuri nu primeste demage
            this.health = this.health - demage
        }
        if (this.health > 0) {
            console.log(this.health)
        } else {
            console.log("Orc is Dead!!!")
        }

    }
}

const enemy1 = new Enemy(10)
const enemyOrc1 = new Orc(12)
const sword1 = new Sword(2)

console.log('Damage for simple Enemy:')
// sword1.strike(enemy1) //8 //sabia1 ii face damge lui inamicul1
// sword1.strike(enemy1) //6
// sword1.strike(enemy1) //4
// sword1.strike(enemy1) //2
// sword1.strike(enemy1) //Enemy is Dead!!!

while (enemy1.health > 0) { //ciclu de lovire pe ianmicsimplu pina la moarte
    sword1.strike(enemy1)
}

console.log('Damage for Orc:') //
sword1.strike(enemyOrc1) //18
sword1.strike(enemyOrc1)
sword1.strike(enemyOrc1)
sword1.strike(enemyOrc1)
sword1.strike(enemyOrc1)
sword1.strike(enemyOrc1)
sword1.strike(enemyOrc1)
sword1.strike(enemyOrc1)

// while (enemyOrc1.health > 0) {
//     sword1.strike(enemy1)
// }

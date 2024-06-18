'use strict'

class Character {
    #inventory = 'knife'//privat invetraiu caracterului
    #health = 10 //sanatatea caracterului, po default 10

    constructor(name, category) {
        this.name = name
        this.category = category
    }//'constructor' metoda rezervata de clasa

    pickItem(item) {
        this.#inventory.push(item)
    }

    recievDamage(damage) {
        this.#health -= damage
    }
}

class DB {
    save(item) {
        localStorage.setItem('char', item)
    }

    load() {
        //..incarca caracterul din savari
    }
}

const character1 = new Character('Andrew', 'human')
console.log(character1)
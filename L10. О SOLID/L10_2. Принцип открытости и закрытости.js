'use strict'

class Tresure {
    //rezolvarea problemei
    value = 0
}

class Coin extends Tresure {
    value = 1
}

class Crystal extends Tresure {
    value = 10
}

//daca apare un tip nou de Bogatie
class Briliant extends Tresure {
    value = 20

}
//rezulta ca trebuie sa ne bagam manual in clasa Inventory
//pentru a redacta problema
//aici si apar nuantsele cu clasa 'Inventory' apare Problema

class Inventory {
    #score
    pick(tresure) {
        // if (tresure instanceof Coin) {
        //     this.#score += 1
        // }
        // if (tresure instanceof Crystal) {
        //     this.#score += 10
        // }
        this.#score += tresure.value
        //Atfel urmarim principiu de deschidere si inchidere a claselor
    }
}
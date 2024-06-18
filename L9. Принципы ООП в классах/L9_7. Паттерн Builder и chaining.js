'use strict'

const arr = [1, 2, 3]
console.log(arr
    .map(a => a * 2) //asta se cheama 'caining' 
    .filter(a => a > 0) //cind chemam metodele arraiului una dupa alta 
    .find(a => a < 10))

console.log(arr)

console.log('Exemplu de "chaining" la Clase:')
class Wallet {
    balance = 0
    add(sum) {
        this.balance += sum
        return this
    }

    remove(sum) {
        this.balance -= sum
        return this
    }
}

const wallet1 = new Wallet()
const rezultat = wallet1
    .add(100)
    .remove(20)
    .remove(15)
    .add(5)
// putem sa folosim 'chaining' 
//numai daca cins declaram metoda in interiorul clasei 
//folosim patternul builder 'this', return this.

console.log(rezultat)

class Builder {
    house = {}
    addRoof() {
        this.house.roof = 'Roof'
        return this
    }

    addFloor() {
        this.house.floor = 'Floor'
        return this
    }

    execute() {
        return this.house
    }
}

const res1 = new Builder().addRoof().addFloor().execute()
console.log(res1)
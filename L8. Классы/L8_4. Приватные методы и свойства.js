'use strict'

class Car {
    #vin = 2315628905 //proprietatea privata se declarcu cu '#'
    speed //proprietate publica

    constructor() {
        // delete this.#vin //Nu o sa reusim sa stergem '#vin'
        //SyntaxError: Private fields can not be deleted
    }
    #changeVin() { //metoda privata a clasei 'Car'
        console.log('changed')
    }
    test() { //metoda publica
        this.#changeVin()
        //folosirea metodelo private in metodele publice
        console.log(this.#vin) //folosirea proprietatsilor private
    }

    static #field = 3

    static {
        this.#field = 5
    }
}

const newCar = new Car()
newCar.test() //changed 2315628905

'use strict'
//Abstractisa VS Incapsulatsie

// Ca exemplu luam un exemplu de filme NetFlix
class Film {
    #name //# le facem private
    #author
    rating
    #lenght

    constructor(name, author, lenght) {
        this.#name = name
        this.#author = author
        this.#lenght = lenght

    }
    get name() {
        return this.#name
    }

    get author() {
        return this.#author
    }

    get lenght() {
        return this.#lenght
    }
}

const film1 = new Film('Avatar', 'Cameron', 240)
console.log(film1)

'use strict'

/**
 * Creeati o clasa a utilizatorului cu proprietatile:
 * -loghin
 * -password
 * 
 * Parola la introducere trebuie sa intorca ca in oglinda 
 * si in forma asta sa se salveze.
 * Parola si loghinul dupa crearee nu se poate de modificat.
 * Clasa trebuie sa mai aibe metodele:
 * -Schimba parole (transmitem parola veche si noua)
 * -controleaza parolele
 */

class User {
    #login
    #_password

    constructor(login, password) {
        this.#login = login
        this.#password = password
    }

    set #password(pass) {
        this.#_password = pass.split('').reverse().join('')
    }

    get #password() {
        return this.#_password.split('').reverse().join('')
    }

    get login() {
        return this.#login
    }

    //versia mea de metoda 'chekPassword()'
    // chekPassword(pass) {
    //     if (this.#password === pass) {
    //         return `'${pass}'-> Prola Coincide!!!`
    //     }
    //     return `'${pass}'-> Parola Nu Coincide.`
    // }
    chekPassword(pass) {
        return this.#password === pass
    }

    changePassword(oldPass, newPass) {
        if (!this.chekPassword(oldPass)) {
            return false
        }
        this.#password = newPass
        return true
    }



}

const user1 = new User('andrew', 'drewdrew')
console.log(user1)
console.log(user1.login) //andrew
console.log(user1.chekPassword('ffaf')) //false
console.log(user1.chekPassword('werdwerd')) //false
console.log(user1.chekPassword('drewdrew')) //true

console.log(user1.changePassword('drewdrew', '1')) //true //parola sa schimbat
console.log(user1.changePassword('sdf', '2')) //false //parola nu sa schimbat
console.log(user1.changePassword('1', '2')) //true //sa schimbat
console.log(user1)


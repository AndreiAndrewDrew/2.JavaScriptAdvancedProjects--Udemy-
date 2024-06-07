'use strict'

/**
 * De creeayt o functie care controleaza daca este ziua de nstere 
 * a unui utilizator pe care il primeste
 */

const user1 = {
    name: 'Vasea',
    birthday: 'Jun 07 1988'
}
const user2 = {
    name: 'Andrew',
    birthday: 'Nov 20 1986'
}

function checkBirthday(user) {
    const birthdayDate = new Date(user.birthday)
    const dateNow = new Date()
    if (birthdayDate.getMonth() !== dateNow.getMonth()) {
        return `Nu este ziua de nastere a lui ${user.name}.`
    }
    if (birthdayDate.getDate() !== dateNow.getDate()) {
        return `Nu este ziua de nastere a lui ${user.name}.`
    }
    return `Astazi: ${dateNow}: 
    Este ziua de nastere a lui ${user.name}, 
    nascut pe data: ${user.birthday} !!!`

}

console.log(checkBirthday(user1))
console.log(checkBirthday(user2))
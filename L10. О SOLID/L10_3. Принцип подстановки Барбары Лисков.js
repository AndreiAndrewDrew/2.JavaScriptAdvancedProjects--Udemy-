'use strict'

//Exemplu
class User {
    #role = 'user'

    getRole() {
        return this.#role
    }

}

class Admin extends User {
    #role = ['user', 'admin']

    getRole() {
        return this.#role.join(', ') //facem ca sa ne intoarca un rind
    }
}

function logRole(user) {
    console.log('Role: ' + user.getRole().toUpperCase())
}

logRole(new User()) //Role: USER
logRole(new Admin()) //Role: USER,ADMIN
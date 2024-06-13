'use strict'

const User = { //Am creeat un obiect 
    hello() {
        console.log('Hello')
    }
}

const user1 = Object.create(User)
//creem obiectul 'user1' pe seama obiectului 'User' care 
//la rindul lui se pune in prototypul lui 'user1'
console.log(user1)
user1.hello() //hello
console.log(user1.__proto__ == User) //true

const admin = Object.create(user1) //deja 'admin' se mosteneste de la 'user1'
console.log(admin)
admin.hello()



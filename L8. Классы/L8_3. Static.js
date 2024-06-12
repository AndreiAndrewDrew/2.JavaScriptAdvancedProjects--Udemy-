'use strict'

Number.MAX_SAFE_INTEGER //proprietatea statica
new Number()

Array.from([1, 2, 3]) //metoda statica
new Array()

//metodele la clase
class Test {
    hello() { //metoda dinamica, clasica
        console.log('Hello')
    }
    static helloStatic() { //metoda(functie) statica,
        console.log('Hello from Metode Static')
    }
    static a = 1 //proprietate statica

    static { //bloc static
        let b = 5
        this.a = 5 //se va schimba valoarea lui 'a'
    }

}

const test = new Test() //creem exemplar clasei Test
test.hello() //Hello //ne adresam metodei dinamice a claseio

Test.helloStatic() // direct accesam metoda statica a claei
console.log(Test.a) //deja 'a' va fi egal cu 5 dar nu cu 1

'use strict'

/**
 * De creat cu ajutorul functiilor si prototipelor 
 * un cosh de produse cu urmatoarele metode:
 * - Aduagatsi un produs
 * - Marirea numarului de produse
 * = Micsorarea numarului de produse (de sters daca sunt 0)
 */

const product = { id: 1, name: 'Bread', count: 1 }

const CosProduse = function () {
    this.products = []
}

CosProduse.prototype.addProduct = function (product) {
    if (this.products.find(product => product.id === product.id)) {
        return
    }
    this.products.push(product)

}

CosProduse.prototype.marireaNumarProduse = function (id) {
    this.products = this.products.map(product => {
        if (product.id === id) {
            product.count++
            return product
        }
        return product
    })
}

CosProduse.prototype.micsorareaNumarProduse = function (id) {
    this.products = this.products.map(product => {
        if (product.id === id) {
            product.count--
            return product
        }
        return product
    }).filter(product => product.count > 0)
}

const cosh1 = new CosProduse()
cosh1.addProduct(product)
cosh1.marireaNumarProduse(1) //adugam inca un produs cu id=1 'count' devine 2
cosh1.marireaNumarProduse(2) //nu face nimik, navame asa produs cu id=2
cosh1.marireaNumarProduse(1)
cosh1.micsorareaNumarProduse(1)
cosh1.micsorareaNumarProduse(1)
cosh1.micsorareaNumarProduse(1) //produsele au stat 0
console.log(cosh1)

const cosh2 = new CosProduse()
cosh2.addProduct({ id: 2, name: 'Cirnats', count: 3 })
cosh2.micsorareaNumarProduse(2)
cosh2.micsorareaNumarProduse(2)
console.log(cosh2)

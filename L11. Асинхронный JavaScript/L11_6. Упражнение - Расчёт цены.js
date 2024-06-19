'use strict'

/**
 * Trebuie sa primim pretsul mediu pe produse din API
 * https://dummyjson.com/products
 */

const request = new XMLHttpRequest()

request.open('GET', 'https://dummyjson.com/products/')
request.send()

request.addEventListener('load', function () {
    //console.log(this.responseText) //primim raspuns in forma de texts
    const { products } = JSON.parse(this.responseText) //convertam textul in obiect
    console.log(products)//optsinem toate produsele
    const sum = products.reduce((acc, product) => acc += product.price, 0)
    console.log('Suma totala a prtsurilor = ', sum)
    const pretulMediu = sum / products.length
    console.log('Pretsul mediu pe produse = ', pretulMediu)

})
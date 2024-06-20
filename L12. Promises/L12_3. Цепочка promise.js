'use strict'

//fetch zapros pentru primirea toate produsele
const rezultat = fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(({ products }) => {
        console.log(products)
        return fetch('https://dummyjson.com/products/' + products[0].id)

    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

//Am construit unul dupa altul chaining promisuri
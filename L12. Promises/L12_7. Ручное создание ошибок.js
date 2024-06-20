'use strict'

//Generam cu mina erorile
fetch('https://dummyjson.com/products')
    .then( //then() este prelucrare pozitiva, cind erori nus
        response => {
            if (!response.ok) {
                throw new Error(`Is error  ${response.status}`)
            }
            return response.json()
        }
    )
    .then(
        ({ products }) => {
            console.log(products)
            return fetch('https://dummyjson.com/productss/' + products[0].id)
        }
    )
    .then(
        response => {
            if (!response.ok) {
                throw new Error(`Is error  ${response.status}`)
            }
            response.json()
        }
    )
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        const el = document.querySelector('.filter2')
        el.innerHTML = error.message
    })
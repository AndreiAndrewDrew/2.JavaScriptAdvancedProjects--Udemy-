'use strict'

fetch('https://dummyjson.com/productss')
    .then( //then() este prelucrare pozitiva, cind erori nus
        response => {
            console.log(response)
            return response.json()
        }
    )
    .then(
        ({ products }) => {
            console.log(products)
            return fetch('https://dummyjson.com/products/' + products[0].id)
        }
    )
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error)) //prelucrare Globala
    .finally(() => { //bloc 'finally()' ne permita sa executam anumit cod, actiuni - independent de rezultatele zaprosurilor noastre
        console.log('Finally')
    })
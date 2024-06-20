'use strict'
/*
Creati o functie, care primeste rindul si textul erorii,
si intoarce deja un Promise cu JSON din corpul zaprosului 
 */

function getData(url, errorMessage) {
    return fetch(url)
        .then(
            response => {
                if (!response.ok) {
                    throw new Error(`${errorMessage} ${response.status}`)
                }
                return response.json()
            }
        )
}

getData('https://dummyjson.com/products', 'Nu sa putut de optsinut Produsele')
    .then(
        ({ products }) => {
            console.log(products)
            return getData('https://dummyjson.com/productss/' + products[0].id, 'Nu sa putut de optsinut produsul')
        }
    )
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        const el = document.querySelector('.filter2')
        el.innerHTML = error
    })
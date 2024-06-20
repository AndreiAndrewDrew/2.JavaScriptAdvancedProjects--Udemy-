'use strict'

//Varinata 1
//special introducem url nu corect,adugam | un 's' la domenul 'json.com'
// fetch('https://dummyjsons.com/products')
//     .then(
//         response => response.json(),
//         error => console.log(error) //prindem eroarea
//     )
//     .then(({ products }) => {
//         console.log(products)
//         return fetch('https://dummyjson.com/products/' + products[0].id)

//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })

//varianta 2 de greseaal
//adugam la '/productss' inca un 's', stricam pagina
// fetch('https://dummyjson.com/productss')
//     .then(
//         response => {
//             console.log(response)
//             return response.json()
//         },
//         error => console.log(error) //prindem eroarea
//     )
//     .then(({ products }) => {
//         console.log(products)
//         return fetch('https://dummyjson.com/products/' + products[0].id)
//     },
//         error => console.log(error)
//     )
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })


//varianta 3 
//Preclucrea Globala a tuturor greselilor (cu 'catch')
fetch('https://dummyjsons.com/products')
    .then(
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
    .catch(error => console.log(error))
//'catch()' ne permite sa prindem eroare global, la care etapa nu s-ar afla


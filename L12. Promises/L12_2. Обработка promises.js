'use strict'

fetch('https://dummyjson.com/products/1')
    .then((response) => {
        console.log(response)
        // console.log(response.json()) //Promise {<pending>}
        return response.json() //json format
        // return response.text() //in format de text
    })
    .then((data) => {
        console.log(data)
    })

//simplificam requestul
const rezultat = fetch('https://dummyjson.com/products/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
//Promise {<pending>}
'use strict'

/**
 * creatsi un generator de activitatsi:
 * https://www.boredapi.com/api/activity //saitul nu lucreazal amoment
 * de aceea am facut exemplu pe baza la :
 * https://dummyjson.com/products/
 * cu afishaea pe apagina
 */

const wrapper = document.querySelector('.wrapper')

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id)
    return response.json()
}

function randomProductId() {
    return Math.floor(Math.random() * 30 + 1)
}

async function generate() {
    console.log('Primirea productului')
    try {
        wrapper.innerHTML = ''
        const data = await Promise.all([
            getProduct(randomProductId()),
            getProduct(randomProductId()),
            getProduct(randomProductId())
        ])
        console.log(data)
        for (const el of data) {
            const element = document.createElement('div')
            element.innerHTML = `Id=${el.id}; Title: ${el.title}`
            wrapper.appendChild(element)
        }
    } catch (e) {
        console.error(e)
    }
}

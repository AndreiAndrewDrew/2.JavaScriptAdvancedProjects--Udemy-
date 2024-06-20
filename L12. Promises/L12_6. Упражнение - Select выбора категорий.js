'use strict'

/*
Creatsi un request din https://dummyjson.com/products/category-list,
De primit lista de categorii si de afishat <select> alegerea categorii
*/

function createSelect(array) {
    const el = document.querySelector('.filter')
    el.innerHTML = `<select>
        ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
    </select>`
}

function getCategories() {
    fetch('https://dummyjson.com/products/category-list/')
        .then(response => response.json())
        .then(data => createSelect(data))
        .catch(error => console.log(`Eroare: ${error}`))

}

getCategories()
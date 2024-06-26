'use strict'

function getProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => console.log(data))
}

getProducts()
console.log('End')

//acuma facem functia naosatra asincrona
async function getProductsAsync() {
    const productsResponse = await fetch('https://dummyjson.com/products')
    const { products } = await productsResponse.json()
    console.log(products)

    const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id)
    const product = await productResponse.json()
    console.log(product)

}
getProductsAsync()
console.log('End') 
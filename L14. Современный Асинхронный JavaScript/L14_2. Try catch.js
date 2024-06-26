'use strict'

async function getProductsAsync() {
    try {
        const productsResponse = await fetch('https://dummyjson.com/products')
        if (!productsResponse.ok) {
            throw new Error(productsResponse.status)
        }
        const { products } = await productsResponse.json()
        console.log(products)

        const productResponse = await fetch('https://dummyjson.com/products/' + products[0].id)
        const product = await productResponse.json()
        console.log(product)
    } catch (e) {
        console.error(e)
    } finally {
        console.log('Finally')
    }
}
getProductsAsync()
console.log('End') 
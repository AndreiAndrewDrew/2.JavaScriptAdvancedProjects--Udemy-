'use strict'

async function gteAllProducts() {
    const response = await fetch('https://dummyjson.com/products')
    return response.json()
}

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id)
    return response.json()
}

// async function main() { //primim productele la rind
//     const { products } = await gteAllProducts()
//     for (const product of products) {
//         const res = await getProduct(product.id)
//         console.log(res)
//     }
// }

// async function main() {
//     const { products } = await gteAllProducts()
//     const res = await Promise.all([ 
//         getProduct(1), //primim paralele produsele
//         getProduct(3),
//         getProduct(4)
//     ])
//     console.log(res)
// }

async function main() {
    const { products } = await gteAllProducts()
    const res = await Promise.all(products.map(product => getProduct(product.id)))
    console.log(res) //primim toate produsele paralele odata
}

main()
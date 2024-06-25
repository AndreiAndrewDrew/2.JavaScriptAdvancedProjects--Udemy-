'use strict'

class ProductsRepository {
    async getProducts() { //metode asincrone
        const response = await fetch('https://dummyjson.com/products')
        console.log(await response.json())

    }

}

const repositoyProd1 = new ProductsRepository()
repositoyProd1.getProducts()


const asyncArrow = async () => { //metode strelocinie asincrone 
    const response = await fetch('https://dummyjson.com/products')
    console.log(await response.json())
}

asyncArrow()
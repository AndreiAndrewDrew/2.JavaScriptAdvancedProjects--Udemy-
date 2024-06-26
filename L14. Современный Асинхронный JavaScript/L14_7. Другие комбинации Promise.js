'use strict'

async function getProduct(id) {
    const response = await fetch('https://dummyjson.com/products/' + id)
    return response.json()
}

async function getProductError(id) { //aduagat un 's' la 'dummyjson'
    const response = await fetch('https://dummyjsons.com/products/' + id)
    return response.json()
}

async function main() {
    const res1 = await Promise.all([
        getProduct(1),
        // getProduct(2),
        // getProductError(2)//in cazul acesta cade tot
    ])
    console.log(res1)

    const res2 = await Promise.allSettled([ //ne intorce tat daca chiar unul din ei a cazut
        getProduct(1),
        // getProduct(2),
        getProductError(2) //se afisheaza si eroarea
        //aici se afisheaza ambele numai ca elementu 2 va fi cu status:"rejected"
    ])
    console.log(res2)

    const res3 = await Promise.race([ //afisheaza pe cel mai rapid
        getProduct(1),
        getProduct(2)
    ])
    console.log(res3) //primim ba primul elemnt, ba al 2 element
}

main()


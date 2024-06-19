'use strict'

const request = new XMLHttpRequest()
request.open('GET', 'https://dummyjson.com/products/')
request.send()

request.addEventListener('load', function () {
    //console.log(this.responseText) //primim raspuns in forma de texts
    const { products } = JSON.parse(this.responseText) //convertam textul in obiect
    console.log(products)//optsinem toate produsele

    const request = new XMLHttpRequest()
    request.open('GET', 'https://dummyjson.com/products/' + products[0].id)
    request.send()

    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText) //convertam textul in obiect
        console.log(data) //optinem produsul cu id=0
    })

})
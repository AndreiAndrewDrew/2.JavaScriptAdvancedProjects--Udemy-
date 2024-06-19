'use strict'

function req(id) {
    const request = new XMLHttpRequest()

    request.open('GET', 'https://dummyjson.com/products/' + id)
    request.send()

    request.addEventListener('load', function () {
        //console.log(this.responseText) //primim raspuns in forma de texts
        const data = JSON.parse(this.responseText) //convertam textul in obiect
        console.log(data)
    })
}

req(1)
req('') //Lista intrega ocupa mai mult timp ca un id concret
req(2)
req(3)


console.log('End')
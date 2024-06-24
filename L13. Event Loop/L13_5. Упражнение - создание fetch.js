'use strict'

/**
 * Creati functai 'myFetch', care executa in inautru ei
 * XMLHttpRequest
 */
//simulare cum aproximativ lucreaza fetch request-uri

function myFetch(url) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', url)
        request.send()

        request.addEventListener('load', function () {
            if (this.status > 400) {
                reject(new Error(this.status))
            }
            resolve(this.responseText)
        })

        request.addEventListener('error', function () {
            reject(new Error(this.status))
        })

        request.addEventListener('timeout', function () {
            reject(new Error('TimeOut'))
        })


    })
}

myFetch('https://dummyjson.com/productss')
    .then(data => console.log(data))
    .catch(err => console.log(err))
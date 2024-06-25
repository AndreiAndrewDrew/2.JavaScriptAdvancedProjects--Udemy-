'use strict'

/**
 * De primit pozitsie geo a utilizatorului cu ajutorul
 * Geolocation.gatCurrentPosition() (WEB API) si dupa 
 * coorsinate de identificat ce orash, de facut request:
 * https://api.bigdatacloud.net/data/reverse-geocode-client?
 * latitude=00&longitude=00
 */

function getMyCoordinates() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve(
                    { latitude: coords.latitude },
                    { longitude: coords.longitude }
                )
            },
            (err) => {
                reject(err)
            }
        )
    })


}

async function getMyCity() {
    try {
        const { latitude, longitude } = await getMyCoordinates()
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`)
        if (!response.ok) {
            throw new Error(response.status)
        }
        const data = await response.json()
        console.log(data)
        console.log('Orashul meu: ', data.city)
        console.log('Continentul: ', data.continent)

    } catch (e) {
        console.error(e)
    }

}

getMyCity()
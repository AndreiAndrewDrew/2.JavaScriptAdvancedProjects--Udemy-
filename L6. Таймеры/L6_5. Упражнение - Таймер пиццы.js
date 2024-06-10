'use strict'

/**
 * Timer pentru pizza
 * creem timer pentru pizza, 
 * O functie care primeste timpul in ms de gatire ai pizzei, 
 * care o sa ne afisheze in console timpul de gatire
 * Ex 4 secunde:
 * 00:04
 * 00:03
 * 00:02
 * 00:01
 * 00:00 
 * Pizza e gata!!! 
 */

function pizzaTimer(ms) {
    console.log(`Start coke Pizza: ${ms / 1000} secunde`)
    const end = new Date().getTime() + ms
    const interval = setInterval(() => {
        console.log(
            new Intl.DateTimeFormat('ro-MD', {
                minute: 'numeric',
                second: 'numeric'
            }).format(end + 100 - new Date())
            //+100 un mica portsiune de timp pentru a corecta lacurile a lui eventLoop
        )
    }, 1000)
    setTimeout(() => {
        clearInterval(interval)
        console.log('Pizza e gata!!!')
    }, ms)
}

pizzaTimer(7000)